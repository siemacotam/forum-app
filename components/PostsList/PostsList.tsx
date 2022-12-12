import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { PostElement } from "components/PostElement";
import { PostsListProps } from "./PostsList.types";
import { Loader } from "components/Loader";
import { useAppContext } from "hooks";
import { setUserPosts } from "AppContext/Reducers/mainReducer.helpers";
import { Post } from "global";

export const PostsList = ({ posts, handleDelete }: PostsListProps) => {
  const [loading, setLoading] = useState(false);
  const { dispatch, state } = useAppContext();

  const handleLoading = () => setLoading(true);

  console.log(state.users);

  return (
    <>
      <Stack rowGap={2}>
        {posts.map((post) => (
          <PostElement
            key={post.id}
            post={post}
            handleLoading={handleLoading}
            handleDelete={handleDelete}
          />
        ))}
      </Stack>
      {loading && <Loader />}
    </>
  );
};
