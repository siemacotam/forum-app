import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { maxContentWith } from "global";
import { theme } from "theme";

export const ContentContainer = styled(Box)({
  flexGrow: 1,
  maxWidth: maxContentWith,
  margin: "0 auto",
  width: "100%",
  padding: "40px 16px",
});

export const HeaderContainer = styled(Box)({
  padding: "16px",
  boxShadow: `0px 3px 5px ${theme.palette.grey[500]}`,
  background: theme.palette.common.white,
});
