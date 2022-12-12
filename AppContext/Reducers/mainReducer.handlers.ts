import { AppContextProps } from "AppContext/AppContext.types";
import { AddPost, DeletePost, SetPosts } from "./mainReducer.types";

export const setUserHandler = (state: AppContextProps, action: SetPosts) => {
  const index = findUserIndex(state, action.payload.id);
  const updatedUsers = [...state.users];
  if (updatedUsers[index]) {
    updatedUsers[index].posts = action.payload.posts;
  }
  return { ...state, users: updatedUsers };
};

export const addPostHandler = (state: AppContextProps, action: AddPost) => {
  const index = findUserIndex(state, action.payload.userId);
  let updatedArray = [...state.users];
  if (updatedArray[index]) {
    updatedArray[index].posts.push(action.payload);
  }
  return { ...state, users: updatedArray };
};

export const deletePostHandler = (
  state: AppContextProps,
  action: DeletePost
) => {
  const index = findUserIndex(state, action.payload.userId);
  let updatedList = [...state.users];
  if (updatedList[index]) {
    updatedList[index].posts = [
      ...updatedList[index].posts.filter(
        (post) => post.id !== action.payload.id
      ),
    ];
  }
  return { ...state, users: updatedList };
};

const findUserIndex = (state: AppContextProps, id: number) =>
  state.users.findIndex((user) => user.id === id);
