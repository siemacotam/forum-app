import {
  Typography,
  Stack,
  TextField,
  CircularProgress,
  Box,
  Button,
  Grid,
} from "@mui/material";
import {
  useFormik,
  FormikProvider,
  Form as FormikForm,
  ErrorMessage,
} from "formik";
import { maxContentWith } from "global";
import { initialValues, validationSchema } from "../AddPost.const";
import { IForm, IPost } from "../AddPost.types";

export const Form = ({ handleClose, handleSubmit }: IForm): JSX.Element => {
  const formik = useFormik<IPost>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await handleSubmit(values);
      formik.resetForm();
      handleClose();
    },
  });
  const {
    values: { body, title },
    handleChange,
    handleBlur,
    isSubmitting,
  } = formik;

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
                <Button
                  variant="outlined"
                  disabled={isSubmitting}
                  onClick={handleClose}
                >
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
