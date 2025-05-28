import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const ChatFooter = () => {
  return (
    <Stack sx={{}}>
      <TextField
        id="message"
        variant="outlined"
        placeholder="Type you message..."
        sx={{
          backgroundColor: 'white',
          borderRadius: 1,
          m:1,
          '& .MuiInputBase-input': {
            fontSize: '1rem', // Adjust font size here if needed
            color: 'black',   // Properly set text color
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" color="primary">
                <SendIcon fontSize="large" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default ChatFooter;
