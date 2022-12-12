import { IPost } from "components/AddPost/AddPost.types";
import { IUser } from "global";

const API_URL = "https://jsonplaceholder.typicode.com";
class UserService {
  // GET

  getUsers() {
    return fetch(API_URL + "/users").then(async (res) => {
      const data: IUser[] = await res.json();
      const cutTo8Users = data.slice(0, 8);
      return cutTo8Users;
    });
  }
  getUser(id: number) {
    return fetch(API_URL + `/users/${id}`).then((res) => res.json());
  }
  getUserPosts(id: number) {
    return fetch(API_URL + `/posts?userId=${id}`).then((res) => res.json());
  }
  getPostComments(id: number) {
    return fetch(API_URL + `/posts/${id}/comments`).then((res) => res.json());
  }
  getPost(id: number) {
    return fetch(API_URL + `/posts/${id}`).then((res) => res.json());
  }

  // CREATE

  addPost(data: IPost) {
    return fetch(API_URL + `/posts`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
  }

  //DELETE

  deletePost(id: number) {
    return fetch(API_URL + `/posts/${id}`, { method: "DELETE" }).then((res) =>
      res.json()
    );
  }
}
export default new UserService();
