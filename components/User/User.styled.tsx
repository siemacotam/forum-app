import { Card } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "theme";

export const StyledCard = styled(Card)({
  cursor: "pointer",
  ":hover": {
    background: theme.palette.grey[100],
  },
});
