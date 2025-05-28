import { Box, Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import { flexSpaceBetweenCenter } from "../defaultStyle";
import CloseBtn from "./CloseBtn";
import UserProfile from "./UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { toggleLayout } from "../store/slices/layout.slice";

const ChatHeader = () => {
    const isToggle = useSelector((state) => state.layout.toggle);
    const dispatch = useDispatch();

    const handlerToggle = () => {
        dispatch(toggleLayout());
    }
    return (
        <Stack>
            <Grid container>
                <Grid
                    size={{ md: isToggle ? 1 : 2, sm: isToggle ? 1 : 2, xs: isToggle ? 1 : 2 }}
                    sx={{
                        borderBottom: 1,
                        borderRight: 1,
                        p: 1,
                        display: "flex",
                        justifyContent: isToggle ? "center" : "start",
                        alignItems: "center",
                        cursor: 'pointer',
                        boxShadow:'none',
                        borderColor:'text.primary'
                    }}
                    // component={Button}
                    onClick={handlerToggle}
                >
                    <PeopleIcon fontSize="large" sx={{ color: "primary" }} />
                    {!isToggle ? <Typography variant="h6" sx={{ ml: 1.5, fontWeight: 700,color:'primary.contrastText',textTransform:'capitalize' }}>Contacts</Typography> : null}
                </Grid>
                <Grid
                    size={{ md: isToggle ? 11 : 10, sm: isToggle ? 11 : 10, xs: isToggle ? 11 : 10 }}
                    sx={{ px: 4, pb: 1, borderBottom: 1, ...flexSpaceBetweenCenter }}
                >
                    <UserProfile />
                    <CloseBtn />
                </Grid>
            </Grid>
        </Stack>
    );
};

export default ChatHeader;
