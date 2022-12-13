import { Card, CardContent, Stack, Typography } from "@mui/material";
import { theme } from "theme";
import { CommentElementProps } from "./CommentElement.types";

export const CommentElement = ({
  comment: { name, email, body },
}: CommentElementProps): JSX.Element => (
  <Card variant="outlined" sx={{ bgcolor: theme.palette.grey[50] }}>
    <CardContent>
      <Stack rowGap={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>{name}</Typography>
          <Typography>{email}</Typography>
        </Stack>
        <Typography>{body}</Typography>
      </Stack>
    </CardContent>
  </Card>
);
