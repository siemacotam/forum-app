import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Post } from "global";
import { Ref, forwardRef, ReactElement } from "react";
import * as yup from "yup";

export const initialValues: Post = {
  id: 0,
  title: "",
  body: "",
  userId: 0,
  comments: [],
};

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const validationSchema = yup.object({
  title: yup.string().required("File required"),
  body: yup.string().required("File required"),
});
