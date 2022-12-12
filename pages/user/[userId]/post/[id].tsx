import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Comment, IUser, Post } from "global";
import userServices from "services/user-services";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { CommentsList, PostDetails } from "components";

interface UserPageProps {
  user: IUser;
  post: Post;
  comments: Comment[];
}

function UserPage({
  user: { id, name, username, email, phone, website, posts },
  post,
  comments,
}: UserPageProps) {
  const [openComments, setOpenComments] = useState(false);
  console.log(name, post, comments);

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack rowGap={3}>
          <Typography component="span" textAlign="center" fontSize="1.5rem">
            {name}
          </Typography>
          <Box>
            <Button component={Link} href={`/user/${id}`} variant="outlined">
              <ArrowBackIcon /> Back
            </Button>
          </Box>
          <PostDetails post={post} />
          <CommentsList comments={comments} />
        </Stack>
      </CardContent>
    </Card>
  );
}

export async function getStaticPaths() {
  const res = await userServices.getUsers().catch(() => console.log("error"));
  const usersList: IUser[] = res || [];

  if (res) {
    const usersWithPostsPromisses = usersList.map((user) =>
      userServices.getUserPosts(user.id)
    );
    await Promise.all(usersWithPostsPromisses).then((values: Post[][]) => {
      values.map((postsList) => {
        if (postsList.length > 0) {
          const userId = postsList[0].userId;
          const index = usersList.findIndex((user) => user.id === userId);
          usersList[index].posts = postsList;
        }
      });
    });
  }

  const paths = usersList
    .map((user: IUser) =>
      user.posts.map((post) => ({
        params: { userId: String(user.id), id: String(post.id) },
      }))
    )
    .reduce(
      (accumulator, currentValue) => accumulator.concat(currentValue),
      []
    );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { userId: string; id: string };
}) {
  const user: IUser = await userServices.getUser(Number(params.userId));
  const post: Post = await userServices.getPost(Number(params.id));
  const comments: Comment[] = await userServices.getPostComments(
    Number(params.id)
  );

  return {
    props: {
      user,
      post,
      comments,
    },
  };
}

export default UserPage;
