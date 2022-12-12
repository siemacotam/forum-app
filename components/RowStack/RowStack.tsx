import { Stack } from "@mui/material";
import { RowStackProps } from "./RowStack.types";

export const RowStack = ({ children }: RowStackProps): JSX.Element => (
  <Stack direction="row" alignItems="center" spacing={2}>
    {children}
  </Stack>
);
