import React from 'react'
import { flexItemCenter } from '../defaultStyle'
import { Avatar, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import userImg from '../assets/authuser.jpg'

const UserProfile = () => {
    const authUser = useSelector((state) => state.auth.authUser);
    console.log(authUser);
    return (
        <>
            <Box sx={{ ...flexItemCenter }}>
                <Avatar
                    src={authUser?.profilePic || userImg}
                    alt="Profile Picture"
                    sx={{ width: 50, height: 50, cursor: "pointer" }}
                />

                <Box sx={{ px: 1.5 }}>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{authUser.fullname}</Typography>
                    <Typography variant="body2">Online</Typography>
                </Box>
            </Box>
        </>
    )
}

export default UserProfile