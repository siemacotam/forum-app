import { AppContextProps } from "../AppContext.types";
import { Actions, ActionType } from "./mainReducer.types";

export const mainReducer = (
  state: AppContextProps,
  action: Actions
): AppContextProps => {
  switch (action.type) {
    case ActionType.SET_USERS:
      return { users: action.payload };
    case ActionType.SET_USER_POSTS:
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      const updatedUsers = [...state.users];
      if (updatedUsers[index]) {
        updatedUsers[index].posts = action.payload.posts;
      }
      return { users: updatedUsers };
    case ActionType.ADD_POST:
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.userId
      );
      let updatedArray = [...state.users];
      if (updatedArray[userIndex]) {
        updatedArray[userIndex].posts.push(action.payload);
      }
      return { users: updatedArray };
    case ActionType.DELETE_POST:
      const indexOfUser = state.users.findIndex(
        (user) => user.id === action.payload.userId
      );
      let updatedList = [...state.users];
      if (updatedList[indexOfUser]) {
        updatedList[indexOfUser].posts = [
          ...updatedList[indexOfUser].posts.filter(
            (post) => post.id !== action.payload.id
          ),
        ];
      }
      return { users: updatedList };
    default:
      return state;
  }
};
