import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { AddPostProps } from "./AddPost.types";
import { forwardRef } from "react";
import { Transition } from "./AddPost.const";
import { Stack } from "@mui/material";
import { maxContentWith } from "global";
import { Form } from "./Form/Form";
import { Box } from "@mui/material";

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
    <Form id={id} handleClose={handleClose} handleSubmit={handleSubmit} />
  </Dialog>
);
