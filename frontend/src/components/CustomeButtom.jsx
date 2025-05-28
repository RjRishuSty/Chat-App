import { Button, Typography } from "@mui/material";

import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const CustomeButtom = ({ useIn }) => {
  return (
    <>
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
      ) : (
        ""
      )}
    </>
  );
};

export default CustomeButtom;
