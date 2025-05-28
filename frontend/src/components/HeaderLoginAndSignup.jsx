import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Logo from "./Logo";

const HeaderLoginAndSignup = ({ useIn }) => {
  const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <Stack
      sx={{
        // border:'2px solid red',
        width: "100%",
        height: "auto",
        px: isMobile ? 1.5 : 3,
        backgroundColor: "background.optional",
        display: "felx",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <Box sx={{ mt: 4 }}>
        <Logo useIn="header" />
        <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
          {useIn === "login" ? "Welcome back" : "Create Account"}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {useIn === "login"
            ? "Please log in to continue chatting with your friends and communities."
            : "Join Talkative to start chatting instantly with your friends and communities."}
        </Typography>
      </Box>
    </Stack>
  );
};

export default HeaderLoginAndSignup;
