export interface AddPostProps {
  handleClose: () => void;
  id: number;
  handleSubmit: (values: IPost) => Promise<void>;
}

export interface IPost {
  title: string;
  body: string;
  userId: number;
}

export interface IForm {
  id: number;
  handleClose: () => void;
  handleSubmit: (values: IPost) => Promise<void>;
}
