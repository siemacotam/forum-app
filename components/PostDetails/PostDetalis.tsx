import { Card, CardContent, Stack, Typography } from "@mui/material";
import { theme } from "theme";
import { PostDetailsProps } from "./PostDetails.types";

export const PostDetails = ({
  post: { body, title },
}: PostDetailsProps): JSX.Element => (
  <Card variant="outlined" sx={{ bgcolor: theme.palette.grey[200] }}>
    <CardContent>
      <Stack rowGap={2}>
        <Typography fontWeight="bold" fontSize="2rem" textAlign="center">
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
