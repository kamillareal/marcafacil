import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderOptionsContainer = styled("div")(({ theme }) => ({
  maxWidth: "529px",
  display: "flex",
  gap: "2rem",

  span: {
    cursor: "pointer",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ToolBarStyled = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

export const MenuBoxStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const PerfilBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
}));

export const ProfileBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
}));
