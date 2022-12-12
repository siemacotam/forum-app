import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DeleteModalProps } from "./DeleteModal.types";
import { useAppContext } from "hooks";
import userServices from "services/user-services";
import { deletePost } from "AppContext/Reducers/mainReducer.helpers";

export const DeleteModal = ({
  post,
  handleClose,
  handleDelete,
}: DeleteModalProps) => {
  const { dispatch } = useAppContext();

  const handleDeletePost = async () => {
    await userServices.deletePost(post.id);
    handleDelete(post.id);
    dispatch(deletePost(post));
    handleClose();
  };

  return (
    <Dialog open={Boolean(post.id)} onClose={handleClose}>
      <DialogTitle>Delete post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are You sure You want to delete this post ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleDeletePost} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
