import React from "react";
import { Card, Typography, Button, useMediaQuery } from "@mui/material";
import InputesFields from "./InputesFields";
import Logo from "./Logo";
import { justifyContentCenter } from "../../customeStyles";

const Cards = ({ useIn }) => {
  const isTablet = useMediaQuery("(max-width:992px)");
  const minTablet = useMediaQuery("(max-width:768px)");
  // const xsMobile = useMediaQuery("(max-width:375px)");

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
        width: "100%",
        pt: isTablet ? 5 : 0,
        backgroundColor: "transparent",
        "--Paper-overlay": "none",
        backgroundImage: "none",
        boxShadow: "none",
        ...justifyContentCenter,
        flexDirection: "column",
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
    </Card>
  );
};

export default Cards;
