import {
  Typography,
  Stack,
  TextField,
  CircularProgress,
  Box,
  Button,
  Grid,
} from "@mui/material";
import { addPost } from "AppContext/Reducers/mainReducer.helpers";
import {
  useFormik,
  FormikProvider,
  Form as FormikForm,
  ErrorMessage,
} from "formik";
import { createId, maxContentWith } from "global";
import { useAppContext } from "hooks";
import userServices from "services/user-services";
import { initialValues, validationSchema } from "../AddPost.const";
import { IForm, IPost } from "../AddPost.types";

export const Form = ({ id, handleClose, handleSubmit }: IForm) => {
  const { dispatch, state } = useAppContext();

  const formik = useFormik<IPost>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await handleSubmit(values);
      formik.resetForm();
      handleClose();
    },
  });
  const { values, handleChange, handleBlur, isSubmitting } = formik;
  const { body, title } = values;

  return (
    <Box maxWidth={maxContentWith} width="100%" mx="auto" mt={3} p={2}>
      <FormikProvider value={formik}>
        <FormikForm>
          <Grid item xs={12} md={7} mx="auto">
            <Stack rowGap={2}>
              <TextField
                fullWidth
                name="title"
                label="Title"
                value={title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="title">
                {(msg) => (
                  <Typography variant="caption" color="red">
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>
              <TextField
                fullWidth
                multiline
                name="body"
                minRows={5}
                label="Post"
                value={body}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="body">
                {(msg) => (
                  <Typography variant="caption" color="red">
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" onClick={handleClose}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <CircularProgress size={16} /> : "Save"}
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </FormikForm>
      </FormikProvider>
    </Box>
  );
};
