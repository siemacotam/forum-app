import { IUser, Post } from "global";

export enum ActionType {
  SET_USERS,
  ADD_POST,
  SET_USER_POSTS,
  DELETE_POST,
}

export interface SetUsers {
  type: ActionType.SET_USERS;
  payload: IUser[];
}

export interface SetPosts {
  type: ActionType.SET_USER_POSTS;
  payload: { posts: Post[]; id: number };
}

export interface AddPost {
  type: ActionType.ADD_POST;
  payload: Post;
}

export interface DeletePost {
  type: ActionType.DELETE_POST;
  payload: Post;
}

export type Actions = SetUsers | AddPost | SetPosts | DeletePost;
