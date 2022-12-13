import { Box, Typography, Stack } from "@mui/material";
import { maxContentWith } from "global";
import Link from "next/link";
import { theme } from "theme";
import { LayoutProps } from "./LayoutProps";
import * as S from "./Layout.styled";

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <Stack minHeight="100vh" bgcolor={theme.palette.grey[200]}>
    <S.HeaderContainer>
      <Box pl={2} maxWidth={maxContentWith} mx="auto" width="100%">
        <Typography
          fontWeight="bold"
          letterSpacing="2px"
          fontSize="1.5rem"
          component={Link}
          href="/"
          sx={{ textDecoration: "none", color: "black" }}
        >
          Forum app
        </Typography>
      </Box>
    </S.HeaderContainer>
    <S.ContentContainer>{children}</S.ContentContainer>
  </Stack>
);
