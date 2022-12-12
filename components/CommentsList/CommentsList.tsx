import { useState } from "react";
import { Button, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { CommentElement } from "components/CommentElement";
import { CommentsListProps } from "./CommentsList.types";

export const CommentsList = ({ comments }: CommentsListProps) => {
  const [showComments, setShowComments] = useState(false);

  const openComments = () => setShowComments(!showComments);

  const buttonLabel = showComments ? "Hide comments" : " Show comments";

  return (
    <>
      <Box>
        <Button
          variant={showComments ? "outlined" : "contained"}
          onClick={openComments}
        >
          {buttonLabel}
        </Button>
      </Box>
      {showComments && (
        <Stack rowGap={2}>
          {comments.map((comment) => (
            <CommentElement key={comment.id} comment={comment} />
          ))}
        </Stack>
      )}
    </>
  );
};
