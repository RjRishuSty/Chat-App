import React from "react";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import { Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = ({ useIn }) => {

    const minTablet = useMediaQuery("(max-width:768px)");
    return (
        <Stack
            direction={useIn === 'header' ? "row" : "column"}
            alignItems="center"
            spacing={1}
            component={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                flexGrow: useIn === 'header' ? (minTablet ? 0 : 1) : 0,
                alignSelf: "center",
                maxHeight: "fit-content",
            }}
        >
            <Box component={Link} to="/" sx={{textDecoration:'none'}}>
                <IconButton
                    sx={{
                        borderRadius: 2,
                        backgroundColor: useIn === 'header' ? "background.default" : "background.opitonal"
                    }}
                >
                    <MarkChatUnreadIcon fontSize="large" sx={{color:'icon.default'}}/>
                </IconButton>
                {useIn === 'header' ? <Typography variant="h5" component="span" fontWeight="bold" color="text.primary" ml={1} >
                    Talkative
                </Typography> : ""}
            </Box>
        </Stack>
    );
};

export default Logo;
