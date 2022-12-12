import { Status } from "components/AlertMessage/AlertMessage.types";
import { IUser, Post } from "global";
import {
  ActionType,
  AddPost,
  ClearMessage,
  DeletePost,
  SetMessage,
  SetPosts,
  SetUsers,
} from "./mainReducer.types";

export const setUsers = (users: IUser[]): SetUsers => ({
  type: ActionType.SET_USERS,
  payload: users,
});

export const setUserPosts = (posts: Post[], id: number): SetPosts => ({
  type: ActionType.SET_USER_POSTS,
  payload: { posts, id },
});

export const addPost = (post: Post): AddPost => ({
  type: ActionType.ADD_POST,
  payload: post,
});

export const deletePost = (post: Post): DeletePost => ({
  type: ActionType.DELETE_POST,
  payload: post,
});

export const setMessage = (text: string, type: Status | null): SetMessage => ({
  type: ActionType.SET_MESSAGE,
  payload: { text, type },
});

export const clearMessage = (): ClearMessage => ({
  type: ActionType.CLEAR_MESSAGE,
});
