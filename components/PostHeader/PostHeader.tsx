import { Typography, Stack, Button } from "@mui/material";
import { RowStack, AlertMessage } from "components";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PostHeaderProps } from "./PostHeader.types";

export const PostHeader = ({
  openDialog,
  name,
}: PostHeaderProps): JSX.Element => {
  return (
    <>
      <Typography component="span" textAlign="center" fontSize="1.5rem">
        {name}
      </Typography>
      {<AlertMessage />}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button component={Link} href="/" variant="outlined">
          <RowStack>
            <ArrowBackIcon /> Back
          </RowStack>
        </Button>
        <Button variant="contained" onClick={openDialog}>
          Add new post
        </Button>
      </Stack>
    </>
  );
};
