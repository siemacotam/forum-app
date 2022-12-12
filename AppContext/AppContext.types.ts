import { Dispatch } from "react";
import { IUser, Post } from "../global";
import { Actions } from "./Reducers/mainReducer.types";

export type Values<T> = T[keyof T];

export interface AppContextState {
  state: AppContextProps;
  dispatch: Dispatch<Actions>;
}

export interface AppContextProps {
  users: IUser[];
}

export interface AppContextProviderProps {
  children: JSX.Element;
}
