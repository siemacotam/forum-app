import { Status } from "components/AlertMessage/AlertMessage.types";
import { IUser, Post } from "global";

export enum ActionType {
  SET_USERS,
  ADD_POST,
  SET_USER_POSTS,
  DELETE_POST,
  SET_MESSAGE,
  CLEAR_MESSAGE,
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

export interface SetMessage {
  type: ActionType.SET_MESSAGE;
  payload: {
    text: string;
    type: Status | null;
  };
}

export interface ClearMessage {
  type: ActionType.CLEAR_MESSAGE;
}

export type Actions =
  | SetUsers
  | AddPost
  | SetPosts
  | DeletePost
  | SetMessage
  | ClearMessage;
