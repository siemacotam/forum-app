import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CommentElementProps } from "./CommentElement.types";

export const CommentElement = ({
  comment: { name, email, body },
}: CommentElementProps) => (
  <Card variant="outlined">
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
