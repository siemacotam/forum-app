import { Post } from "global";

export interface DeleteModalProps {
  handleClose: () => void;
  post: Post;
  handleDelete: (id: number) => void;
}
