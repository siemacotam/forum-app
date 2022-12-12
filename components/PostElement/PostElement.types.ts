import { Post } from "global";

export interface PostElementProps {
  post: Post;
  handleLoading: () => void;
  handleDelete: (id: number) => void;
}
