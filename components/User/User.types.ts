import { IUser } from "global";

export interface IUserProps {
  user: IUser;
  handleLoading: () => void;
}
