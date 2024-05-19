import { Box, styled } from "@mui/material";

export const LabPageBody = styled(Box)(() => ({
  width: "100%",
}));

export const CardsContainer = styled(Box)(() => ({
  width: "100%",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "start",
  flexWrap: "wrap",
  gap: "1rem",
}));

export const TitleBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  gap: "1rem",
}));
