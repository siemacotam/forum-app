import { Box, CircularProgress } from "@mui/material";

export const Loader = (): JSX.Element => (
  <Box
    position="fixed"
    display="flex"
    alignItems="center"
    justifyContent="center"
    left={0}
    top={0}
    height="100%"
    width="100%"
    zIndex={1}
    sx={{
      backdropFilter: "blur(3px)",
    }}
  >
    <CircularProgress
      size={80}
      sx={{
        zIndex: 2,
      }}
    />
  </Box>
);
