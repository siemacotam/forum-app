import { styled } from "@mui/system";
import { Card } from "@mui/material";
import { theme } from "theme";

export const StyledCard = styled(Card)({
  flexGrow: 1,
  cursor: "pointer",
  background: theme.palette.grey[50],
  ":hover": {
    boxShadow: 5,
    background: theme.palette.grey[200],
  },
});
