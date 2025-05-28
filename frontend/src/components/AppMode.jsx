import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAppMode } from "../store/slices/AppMode.slice";

const AppMode = () => {
    const mode = useSelector((state) => state.appMode.mode);
    const dispatch = useDispatch();
    return (
        <IconButton onClick={() => dispatch(toggleAppMode())}
            sx={{ backgroundColor: { xs: "transparent", sm: 'background.main' }, borderRadius: 2 }}
        >
            {mode === 'light' ? <Brightness4Icon fontSize="large" /> : <WbSunnyIcon fontSize="large" />}
        </IconButton>
    );
};

export default AppMode;
