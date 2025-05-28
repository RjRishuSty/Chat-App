import React from "react";
import { Card, Typography, Button, useMediaQuery } from "@mui/material";
import InputesFields from "./InputesFields";
import Logo from "./Logo";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { justifyContentCenter } from "../../customeStyles";

const Cards = ({ useIn }) => {
  const isTablet = useMediaQuery("(max-width:992px)");
  const minTablet = useMediaQuery("(max-width:768px)");
  const xsMobile = useMediaQuery("(max-width:375px)");

  const renderCardContent = () => {
    switch (useIn) {
      case "login":
        return (
          <>
            <InputesFields useIn="login" />
          </>
        );

      case "signup":
        return (
          <>
            <InputesFields useIn="signup" />
          </>
        );
      case "profile":
        return <InputesFields useIn="profile" />;

      default:
        return <Typography variant="h6">Invalid card type</Typography>;
    }
  };

  return (
    <Card
      sx={{
        // border:'2px solid red',
        width: isTablet ? "100%" : "80%",
        height: "100%",
        backgroundColor: "transparent",
        "--Paper-overlay": "none",
        backgroundImage: "none",
        border: "none",
        boxShadow: "none",
        ...justifyContentCenter,
        flexDirection: "column",
        py: xsMobile ? 4 : 5,
        px: xsMobile ? 2 : 5,
      }}
    >
      {!minTablet ? (
        <>
          {useIn === "profile" ? null : <Logo useIn="inCard" />}
          <Typography
            variant="h4"
            gutterBottom
            sx={{ mt: 2, color: "text.primary" }}
          >
            {useIn === "login"
              ? "Welcome Back"
              : useIn === "signup"
              ? "Create Account"
              : "Manage Account"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            {useIn === "login"
              ? "Sign in to your account."
              : useIn === "signup"
              ? "Get started with your free account."
              : "Review and update your contact info, profile photo, and preferences."}
          </Typography>
        </>
      ) : null}
      {renderCardContent()}
      {useIn === "login" || useIn === "signup" ? (
        <>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              py: 1.5,
              color: "text.default",
              letterSpacing: 1,
              textTransform: "capitalize",
              backgroundColor: "button.primary",
            }}
          >
            {useIn === "login"
              ? " Login"
              : useIn === "signup"
              ? "Create Account"
              : ""}
          </Button>

          <Typography variant="body1" sx={{ mt: 3, color: "text.secondary" }}>
            {useIn === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <MuiLink
              component={Link}
              to={useIn === "login" ? "/signup" : "/login"}
              sx={{ color: "links.main" }}
            >
              {useIn === "login" ? "Create account" : "Sign in"}
            </MuiLink>
          </Typography>
        </>
      ) : null}
    </Card>
  );
};

export default Cards;
