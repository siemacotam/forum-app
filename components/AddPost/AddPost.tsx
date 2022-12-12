import { Dialog, AppBar, Toolbar, Typography } from "@mui/material";
import { AddPostProps } from "./AddPost.types";
import { Transition } from "./AddPost.const";
import { maxContentWith } from "global";
import { Form } from "./Form/Form";

export const AddPost = ({
  handleClose,
  id,
  handleSubmit,
}: AddPostProps): JSX.Element => (
  <Dialog
    fullScreen
    open={Boolean(id)}
    onClose={handleClose}
    TransitionComponent={Transition}
  >
    <AppBar sx={{ position: "relative" }}>
      <Toolbar>
        <Typography
          maxWidth={maxContentWith}
          width="100%"
          mx="auto"
          variant="h6"
          component="span"
        >
          Add new post
        </Typography>
      </Toolbar>
    </AppBar>
    <Form handleClose={handleClose} handleSubmit={handleSubmit} />
  </Dialog>
);
