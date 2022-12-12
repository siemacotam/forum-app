import { useState } from "react";
import { Stack, IconButton } from "@mui/material";
import { PostElementProps } from "./PostElement.types";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Typography from "@mui/material/Typography";
import { DeleteModal } from "components/DeleteModal/DeleteModal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
import { theme } from "theme";
import { Post } from "global";

export const PostElement = ({
  post,
  handleLoading,
  handleDelete,
}: PostElementProps) => {
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const { query, push } = useRouter();

  const { id, title } = post;

  const navigateToPostPage = () => {
    if (id < 100) {
      handleLoading();
      push(`/user/${query.userId}/post/${id}`);
    } else {
      alert("To big id");
    }
  };

  const openDialog = () => setPostToDelete(post);
  const closeDialog = () => setPostToDelete(null);

  return (
    <>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={openDialog}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
        <Card
          variant="outlined"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            bgcolor: theme.palette.grey[50],
            ":hover": {
              boxShadow: 5,
              bgcolor: theme.palette.grey[100],
            },
          }}
          onClick={navigateToPostPage}
        >
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
        </Card>
      </Stack>
      {postToDelete && (
        <DeleteModal
          handleClose={closeDialog}
          post={post}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};
