import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { AppContextState } from "../AppContext/AppContext.types";

export const useAppContext = () => {
  const { state, dispatch } = useContext<AppContextState>(AppContext);

  return { state, dispatch };
};
