import { IconButton } from '@mui/material'
import React from 'react';

import CloseIcon from "@mui/icons-material/Close";

const CloseBtn = () => {
    return (
        <>
            <IconButton
                sx={{ borderRadius: 20 }}
            >
                <CloseIcon fontSize="large" color="primary" />
            </IconButton>
        </>
    )
}

export default CloseBtn