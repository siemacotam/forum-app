import { Status } from "components/AlertMessage/AlertMessage.types";
import { Dispatch } from "react";
import { IUser } from "global";
import { Actions } from "./Reducers/mainReducer.types";

export type Values<T> = T[keyof T];

export interface AppContextState {
  state: AppContextProps;
  dispatch: Dispatch<Actions>;
}

export interface AppContextProps {
  users: IUser[];
  message: {
    text: string;
    type: Status | null;
  };
}

export interface AppContextProviderProps {
  children: JSX.Element;
}
