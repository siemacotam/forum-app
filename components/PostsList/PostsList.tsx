import { useState } from "react";
import { Stack } from "@mui/material";
import { PostElement } from "components/PostElement";
import { PostsListProps } from "./PostsList.types";
import { Loader } from "components/Loader";

export const PostsList = ({
  posts,
  handleDelete,
}: PostsListProps): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => setLoading(true);

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
