import { emptyMessageState } from "components/AlertMessage/AlertMessage.const";
import { AppContextProps } from "./AppContext.types";

export const initialAppContextValues: AppContextProps = {
  users: [],
  message: emptyMessageState,
};
