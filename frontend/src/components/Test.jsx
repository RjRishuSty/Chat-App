import React from "react";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import InputesFields from "../components/InputesFields";
import AnimatedSquares from "../components/AnimatedSquares";
import { motion } from "framer-motion";

//! Reusable Flex Center Style
const flexCenterColumn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

//! Animation Variants
const fadeSlideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const textFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } },
};

const LoginPage = () => {
  return (
    <Stack component="section" sx={{ mt: 7.5 }}>
      <Grid container>
        {/* Login Form Section */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ backgroundColor: "background.main", py: 9.5, ...flexCenterColumn }}
          component={motion.div}
          variants={fadeSlideLeft}
          initial="hidden"
          animate="visible"
        >
          <Card
            sx={{
              width: "80%",
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Login
            </Typography>
            <InputesFields useIn="login" />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ py: 1.5 }}
              endIcon={<LoginIcon fontSize="large" />}
            >
              Login
            </Button>
          </Card>
        </Grid>

        {/* Animated Section */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ backgroundColor: "background.primary", py: 9.5, ...flexCenterColumn }}
          component={motion.div}
          variants={fadeSlideRight}
          initial="hidden"
          animate="visible"
        >
          <AnimatedSquares />
          <Box
            sx={{ mt: 5, ...flexCenterColumn }}
            component={motion.div}
            variants={textFade}
            initial="hidden"
            animate="visible"
          >
            <Typography variant="h3">Welcome back!</Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", width: "80%", mt: 1 }}
            >
              Log in to continue your conversations, connect with friends, and stay
              updated in real-time. Your chats are just a click away.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default LoginPage;
