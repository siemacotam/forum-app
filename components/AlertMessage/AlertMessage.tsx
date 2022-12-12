import { useEffect } from "react";
import { Alert, Grid } from "@mui/material";
import { useAppContext } from "hooks";
import { pickSeverity } from "./AlertMessage.const";
import { clearMessage } from "AppContext/Reducers/mainReducer.helpers";

export const AlertMessage = (): JSX.Element | null => {
  const { state, dispatch } = useAppContext();
  const { text, type } = state.message;

  useEffect(() => {
    if (text && type) {
      const timer = setTimeout(() => dispatch(clearMessage()), 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [text, type, dispatch]);

  if (!text || !type) {
    return null;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Alert severity={pickSeverity(type)}>{text}</Alert>
      </Grid>
    </Grid>
  );
};
