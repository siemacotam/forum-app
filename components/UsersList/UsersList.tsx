import { useState } from "react";
import { Grid } from "@mui/material";
import { Loader, User } from "components";
import { UsersListProps } from "./UsersList.types";

export const UsersList = ({ users }: UsersListProps) => {
  const [loading, setLoading] = useState(false);

  // From now already done in context provider
  // useEffect(() => {
  //   dispatch(setUsers(users));
  // }, []);

  const handleLoading = () => setLoading(true);

  return (
    <>
      <Grid container spacing={2}>
        {users.map((user) => (
          <User key={user.id} user={user} handleLoading={handleLoading} />
        ))}
      </Grid>
      {loading && <Loader />}
    </>
  );
};
