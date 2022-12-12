import { CardContent, Card, Stack, Button } from "@mui/material";
import { createId, IUser, Post } from "global";
import userServices from "services/user-services";
import { useState, useEffect } from "react";
import { AddPost, PostHeader, PostsList } from "components";
import { IPost } from "components/AddPost/AddPost.types";
import { useAppContext } from "hooks";
import { addPost, setMessage } from "AppContext/Reducers/mainReducer.helpers";
import { statusses } from "components/AlertMessage/AlertMessage.const";

interface UserPageProps {
  user: IUser;
}

function UserPage({ user: { id, name, posts } }: UserPageProps) {
  const [openPostDialog, setOpenPostDialog] = useState<number | null>(null);
  const [postsList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  const { dispatch, state } = useAppContext();
  const closeDialog = () => setOpenPostDialog(null);
  const openDialog = () => setOpenPostDialog(id);

  const handleDelete = (id: number) => {
    setPostList(postsList.filter((post) => post.id !== id));
  };

  const handleSubmit = async (values: IPost) => {
    const postData = { ...values, userId: id };
    try {
      const res = await userServices.addPost(postData);
      const newElement = { ...res, id: createId() };

      const newArray = [newElement, ...postsList];
      setPostList(newArray);
      // in case - api ID will be repeted so here we change their number

      dispatch(addPost(newElement));
      dispatch(setMessage("New post added", statusses.success));
    } catch {
      dispatch(
        setMessage("Something went wrong with adding new post", statusses.error)
      );
    }
  };

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Stack rowGap={3}>
            <PostHeader openDialog={openDialog} name={name} />
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
