import { Card, CardContent, Stack, Typography } from "@mui/material";
import { PostDetailsProps } from "./PostDetails.types";

export const PostDetails = ({
  post: { body, title },
}: PostDetailsProps): JSX.Element => (
  <Card variant="outlined">
    <CardContent>
      <Stack rowGap={2}>
        <Typography fontWeight="bold" fontSize="1.4rem" textAlign="center">
          {title}
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Typography textAlign="center" mb={3}>
              {body}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </CardContent>
  </Card>
);
