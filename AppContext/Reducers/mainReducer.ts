import { emptyMessageState } from "components/AlertMessage/AlertMessage.const";
import { AppContextProps } from "../AppContext.types";
import {
  addPostHandler,
  deletePostHandler,
  setUserHandler,
} from "./mainReducer.handlers";
import { Actions, ActionType } from "./mainReducer.types";

export const mainReducer = (
  state: AppContextProps,
  action: Actions
): AppContextProps => {
  switch (action.type) {
    case ActionType.SET_USERS:
      return { ...state, users: action.payload };
    case ActionType.SET_USER_POSTS:
      return setUserHandler(state, action);
    case ActionType.ADD_POST:
      return addPostHandler(state, action);
    case ActionType.DELETE_POST:
      return deletePostHandler(state, action);
    case ActionType.SET_MESSAGE:
      return { ...state, message: action.payload };
    case ActionType.CLEAR_MESSAGE:
      return {
        ...state,
        message: emptyMessageState,
      };
    default:
      return state;
  }
};
