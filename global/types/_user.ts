export type Values<T> = T[keyof T];

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: IAdress;
  phone: string;
  website: string;
  posts: Post[];
}

interface IAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: string;
  lng: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  comments: Comment[];
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
