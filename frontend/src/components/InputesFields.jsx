import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Person3Icon from "@mui/icons-material/Person3";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const InputesFields = ({ useIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const allInputFields = [
    {
      label: "Profile picture",
      id: "profilePic",
      type: "file",
      icon: <CameraAltIcon />,
    },
    { label: "Full Name", id: "fullname", type: "text", icon: <Person3Icon /> },
    { label: "Email", id: "email", type: "email", icon: <EmailIcon /> },
    {
      label: "Password",
      id: "password",
      type: showPassword ? "text" : "password",
      icon: <LockIcon />,
    },
  ];

  const visibleFields =
    useIn === "signup"
      ? allInputFields.filter((field) => field.id !== "profilePic")
      : useIn === "login"
      ? allInputFields.filter(
          (field) => field.id !== "fullname" && field.id !== "profilePic"
        )
      : useIn === "profile"
      ? allInputFields.filter((field) => field.id !== "password")
      : [];

  return (
    <>
      {visibleFields.map(({ label, id, type, icon }) => {
        const styledIcon = React.cloneElement(icon, {
          sx: { color: "icon.default", fontSize: 22 },
        });

        {/* if (type === "file") {
          return (
            <Box
              key={id}
              sx={{ position: "relative", flexDirection: "column" }}
            >
              <label htmlFor="profilePic">
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 70,
                    right: 60,
                    borderRadius: 2,
                    backgroundColor: "#f0f0f0",
                  }}
                  size="large"
                  component="span"
                >
                  <CameraAltIcon
                    sx={{ fontSize: "1.5rem", color: "icon.default" }}
                  />
                </IconButton>
              </label>
              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: 3, mt: 2 }}
              >
                Click the camera icon to update your photo.
              </Typography>
            </Box>
          );
        } */}

        return (
          <TextField
            key={id}
            component={motion.div}
            fullWidth
            type={type}
            id={id}
            name={id}
            label={label}
            variant="outlined"
            sx={{ mb: 2, color:'text.primary' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{styledIcon}</InputAdornment>
              ),
              endAdornment:
                id === "password" ? (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                      sx={{ color: "icon.default" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ) : null,
            }}
          />
        );
      })}
    </>
  );
};

export default InputesFields;
