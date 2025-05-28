import { Stack } from '@mui/material'
import React, { useCallback, useState } from 'react'
import useAxios from '../custom-hooks/useAxios';
import { enqueueSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkAuth, connectSocket, login, signup } from '../store/slices/auth.slice';
import { io } from 'socket.io-client';

const HandleForm = ({ useIn }) => {
    const BASE_URL = `http://localhost:3000`;
    const user = useSelector((state) => state.auth.authUser);
    console.log("User", user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //! Initial State.....................
    const [formData, setFormData] = useState({
        fullname: user?.fullname || '',
        email: user?.email || "",
        password: "",
        profilePic: user?.profilePic || ""
    });
    console.log('FromData', formData)

    const { request } = useAxios();

    //! Handle Change work on input change................
    const handleChange = useCallback((e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }, []);

    //! Handle inputs Validate ....................
    const handleValidate = () => {
        if (!formData.email || !formData.password) {
            enqueueSnackbar("All fields are required!", { variant: "error" });
            return false;
        }
        if (formData.password.length < 6) {
            enqueueSnackbar("Password must be greater than 6 character!", {
                variant: "error",
            });
            return false;
        }
        return true;
    };

    //! Handle Update.........................
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await request({
                url: '/api/profile-update',
                method: "PUT",
                data: formData,
            });
            dispatch(checkAuth(response.data));
            dispatch(useIn === 'login' ? login(response.data) : signup());
            enqueueSnackbar(response.message, { variant: "success" });
        } catch (error) {
            enqueueSnackbar(error.response.data.message, { variant: "error" });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidate()) {
            try {
                const response = await request({
                    url: useIn === 'signup' ? '/api/signup' : '/api/login',
                    method: "POST",
                    data: formData,
                });
                dispatch(checkAuth(response.data));
                if (useIn === 'login') {
                    const socket = io(BASE_URL);
                    dispatch(connectSocket(socket));
                }
                dispatch(useIn === 'login' ? login(response.data) : signup());
                enqueueSnackbar(response.message, { variant: "success" });
                navigate(useIn === 'login' ? "/" : "/login");
            } catch (error) {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            }

        }
    };
    return (
        <Stack component='form'>

        </Stack>
    )
}

export default HandleForm