import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ChatFooter from './ChatFooter'
import Messages from './Messages'
import AllUsersProfile from './AllUsersProfile'
import { useSelector } from 'react-redux'


const ChatBody = () => {
  const isToggle = useSelector((state) => state.layout.toggle);
  console.log("Body",isToggle);
  return (
    <Stack sx={{ flex: 1 }}>
      <Grid container sx={{ height: '70vh' }}>
        <Grid size={{ md: isToggle ? 1 : 2, sm: isToggle ? 1 : 2, xs: isToggle ? 1 : 2 }}
          sx={{
            borderRight: 1,
            height: '100%',
            p: 1,
            overflow: 'auto',

          }}
        >
          <AllUsersProfile /> 
        </Grid>
        <Grid size={{ md: isToggle ? 11 : 10, sm: isToggle ? 11 : 10, xs: isToggle ? 11 : 10 }}
          sx={{
            // border: "5px solid red",
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
            backgroundColor: 'background.default',
            // borderBottomLeftRadius:5,
            // borderBottomRightRadius:5

          }}
        >
          <Messages />
          <ChatFooter />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default ChatBody
