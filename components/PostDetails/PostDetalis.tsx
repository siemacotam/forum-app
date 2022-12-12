import { useState } from "react";
import { Button, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PostDetailsProps } from "./PostDetails.types";

export const PostDetails = ({
  post: { id, body, title },
}: PostDetailsProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack rowGap={2}>
          <Typography fontWeight="bold" textAlign="center">
            {title}
          </Typography>
          <Typography textAlign="center">{body}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
