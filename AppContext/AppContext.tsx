import { IUser, Post } from "global";
import { createContext, useReducer, useMemo, useEffect } from "react";
import userServices from "../services/user-services";
import { initialAppContextValues } from "./AppContext.const";
import { AppContextProviderProps, AppContextState } from "./AppContext.types";
import { mainReducer } from "./Reducers/mainReducer";
import { setUsers } from "./Reducers/mainReducer.helpers";

export const AppContext = createContext<AppContextState>({
  state: initialAppContextValues,
  dispatch: () => null,
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialAppContextValues);

  const getUsers = async () => {
    const res = await userServices.getUsers().catch(() => console.log("error"));

    if (res) {
      const usersList: IUser[] = res;

      const usersWithPostsPromisses = usersList.map((user) =>
        userServices.getUserPosts(user.id)
      );
      await Promise.all(usersWithPostsPromisses).then((values: Post[][]) => {
        values.map((postsList) => {
          if (postsList.length > 0) {
            const userId = postsList[0].userId;
            const index = usersList.findIndex((user) => user.id === userId);
            usersList[index].posts = postsList;
          }
        });
      });
      dispatch(setUsers(usersList));
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
