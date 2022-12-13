import { useState } from "react";
import {
  Stack,
  IconButton,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { PostElementProps } from "./PostElement.types";
import { Post } from "global";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DeleteModal } from "components/DeleteModal/DeleteModal";
import { useRouter } from "next/router";
import { theme } from "theme";
import { useAppContext } from "hooks";
import { setMessage } from "AppContext/Reducers/mainReducer.helpers";
import { statusses } from "components/AlertMessage/AlertMessage.const";
import * as S from "./PostElement.styled";

export const PostElement = ({
  post,
  handleLoading,
  handleDelete,
}: PostElementProps): JSX.Element => {
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const { query, push } = useRouter();
  const { dispatch } = useAppContext();

  const { id, title } = post;

  const navigateToPostPage = () => {
    if (id < 100) {
      handleLoading();
      push(`/user/${query.userId}/post/${id}`);
    } else {
      dispatch(
        setMessage(
          "Post was added without adding to database. You can check this one. Sorry",
          statusses.error
        )
      );
    }
  };

  const openDialog = () => setPostToDelete(post);
  const closeDialog = () => setPostToDelete(null);

  const shortTitle = title.length <= 50 ? title : title.slice(0, 50) + "...";

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton onClick={openDialog}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
        <S.StyledCard variant="outlined" onClick={navigateToPostPage}>
          <CardContent>
            <Typography textAlign="center" component="p">
              {shortTitle}
            </Typography>
          </CardContent>
        </S.StyledCard>
      </Stack>
      {postToDelete && (
        <DeleteModal
          handleClose={closeDialog}
          post={post}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};
