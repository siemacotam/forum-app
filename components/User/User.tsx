import {
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { IUserProps } from "./User.types";
import { useRouter } from "next/router";
import { RowStack } from "components";
import { randomColor } from "global";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LanguageIcon from "@mui/icons-material/Language";
import { theme } from "theme";

export const User = ({
  user: { id, name, username, email, phone, website },
  handleLoading,
}: IUserProps): JSX.Element => {
  const router = useRouter();

  const navigateToUserPage = () => {
    handleLoading();
    router.push(`/user/${id}`);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card
        variant="outlined"
        sx={{
          cursor: "pointer",
          bgcolor: theme.palette.grey[50],
          ":hover": {
            boxShadow: 5,
            bgcolor: theme.palette.grey[100],
          },
        }}
        onClick={navigateToUserPage}
      >
        <CardContent>
          <Stack rowGap={2}>
            <RowStack>
              <Avatar
                variant="square"
                // sx={{ bgcolor: randomColor() }}
              >
                {username.substring(0, 1)}
              </Avatar>
              <Stack>
                <Typography component="span">{name}</Typography>
                <Typography component="span">{username}</Typography>
              </Stack>
            </RowStack>
            <Divider />
            <Box>
              <RowStack>
                <LocalPhoneIcon />
                <Typography component="span">{phone}</Typography>
              </RowStack>
              <RowStack>
                <AlternateEmailIcon />
                <Typography component="span">{email}</Typography>
              </RowStack>
              <RowStack>
                <LanguageIcon />
                <Typography component="span">{website}</Typography>
              </RowStack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
