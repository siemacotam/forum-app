import { Post } from "global";

export interface PostsListProps {
  posts: Post[];
  id: number;
  handleDelete: (id: number) => void;
}
