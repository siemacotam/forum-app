import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import { DeleteModalProps } from "./DeleteModal.types";
import { useAppContext } from "hooks";
import userServices from "services/user-services";
import {
  deletePost,
  setMessage,
} from "AppContext/Reducers/mainReducer.helpers";
import { statusses } from "components/AlertMessage/AlertMessage.const";

export const DeleteModal = ({
  post,
  handleClose,
  handleDelete,
}: DeleteModalProps): JSX.Element => {
  const { dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);

  const handleDeletePost = async () => {
    setLoading(true);
    try {
      await userServices.deletePost(post.id);
      dispatch(setMessage(`Post id ${post.id} deleted`, statusses.success));
      dispatch(deletePost(post));
      handleDelete(post.id);
    } catch {
      dispatch(
        setMessage("Something went wrong with deleting post", statusses.error)
      );
    }

    handleClose();
    setLoading(false);
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
        <Button disabled={loading} onClick={handleClose}>
          Cancel
        </Button>
        <Button disabled={loading} onClick={handleDeletePost} autoFocus>
          {loading ? <CircularProgress size={16} /> : "Remove"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
