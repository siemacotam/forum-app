import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Card } from "@mui/material";
import { Stack } from "@mui/material";
import { createId, IUser, Post } from "global";
import userServices from "services/user-services";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { AddPost, PostsList, RowStack } from "components";
import { useRouter } from "next/router";
import { IPost } from "components/AddPost/AddPost.types";
import { useAppContext } from "hooks";
import { addPost } from "AppContext/Reducers/mainReducer.helpers";

interface UserPageProps {
  user: IUser;
}

function UserPage({
  user: { id, name, username, email, phone, website, posts },
}: UserPageProps) {
  const [openPostDialog, setOpenPostDialog] = useState<number | null>(null);
  const [postsList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    setPostList(posts);
  }, []);

  const { dispatch, state } = useAppContext();

  const closeDialog = () => setOpenPostDialog(null);
  const openDialog = (id: number) => setOpenPostDialog(id);

  const handleDelete = (id: number) =>
    setPostList(postsList.filter((post) => post.id !== id));

  const handleSubmit = async (values: IPost) => {
    const postData = { ...values, userId: id };
    try {
      const res = await userServices.addPost(postData);

      const newArray = [res, ...postsList];
      setPostList(newArray);
      // in case - api ID will be repeted so here we change their number
      dispatch(addPost({ ...res, id: createId() }));
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Stack rowGap={3}>
            <Typography component="span" textAlign="center" fontSize="1.5rem">
              {name}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button component={Link} href="/" variant="outlined">
                <RowStack>
                  <ArrowBackIcon /> Back
                </RowStack>
              </Button>
              <Button variant="contained" onClick={() => openDialog(id)}>
                Add new post
              </Button>
            </Stack>
            <PostsList posts={postsList} id={id} handleDelete={handleDelete} />
          </Stack>
        </CardContent>
      </Card>
      {openPostDialog && (
        <AddPost
          handleClose={closeDialog}
          id={id}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export async function getStaticPaths() {
  const res = await userServices.getUsers();

  return {
    paths: res.map((user: IUser) => ({
      params: { userId: String(user.id) },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { userId: number };
}) {
  const user: IUser = await userServices.getUser(params.userId);
  const userPosts: Post[] = await userServices.getUserPosts(user.id);

  const userWithPosts = { ...user, posts: userPosts };

  return {
    props: {
      user: userWithPosts,
    },
  };
}

export default UserPage;
