import { Box, Grid, Typography, Stack } from "@mui/material";
import { maxContentWith } from "global";
import { theme } from "theme";
import { LayoutProps } from "./LayoutProps";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack minHeight="100vh">
      <Box p={3} bgcolor={theme.palette.grey[200]}>
        <Typography
          maxWidth={maxContentWith}
          mx="auto"
          width="100%"
          fontWeight="bold"
          letterSpacing="2px"
          fontSize="1.5rem"
        >
          Forum app
        </Typography>
      </Box>
      <Box
        flexGrow={1}
        maxWidth={maxContentWith}
        mx="auto"
        width="100%"
        py={5}
        px={2}
      >
        {children}
      </Box>
    </Stack>
  );
};
