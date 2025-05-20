import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/generateToken.js";
import User from "../models/auth.model.js";
import bcrypt from 'bcrypt';



// ! Sign up controller.................
const signupHandler = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) return res.status(400).json({ message: 'All fields are required.', success: false });
    if (password.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters long.', success: false });
    try {
        const isExist = await User.findOne({ email });
        if (isExist) return res.status(400).json({ message: 'User already exists.', success: false });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,

        })
        await newUser.save();
        res.status(201).json({ message: 'Sign up successfully.', success: true, data: newUser });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error!',
            error: error.message,
            success: false,
        })
    }
}

// ! Log in controller...................
const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "All fields are required.", success: false });
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email.", success: false });
        // Compare hashedPassword............
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) return res.status(400).json({ message: "Increate password.", success: false });
        // Generate jsonwebToken...............
        generateToken(user._id, res);
        res.status(200).json({ message: 'Login successfully', success: true, data: user });

    } catch (error) {
        res.status(500).json({
            message: 'Internal server error!',
            error: error.message,
            success: false,
        })
    }
}

// ! Logout up controller...................
const logoutHandler = async (req, res) => {
    try {
        res.cookie("token", "", { maxAge: 0 });
        res.status(200).json({ message: 'Logout successfully', success: true })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error!',
            error: error.message,
            success: false,
        })
    }
}

// ! Profile update controller...................
const profileUpdateHandler = async (req, res) => {
    const { profilePic } = req.body;

    if (!profilePic) return res.status(400).json({ message: 'Profile picture field is requried.', success: false });
    console.log(req.body)
    try {
        const userId = req.user._id;
        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        console.log("For Cloudinary", uploadResponse);
        const updatedUser = await User.findByIdAndUpdate(userId, { profilePic: uploadResponse.secure_url }, { new: true });
        res.status(200).json({ message: "Profile picture update successfully!", success: true, data: updatedUser });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error!',
            error: error.message,
            success: false,
        })
    }
}

// ! Check Auth controller..................
const checkAuthHandler = async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error!',
            error: error.message,
            success: false,
        })
    }
}


export { signupHandler, loginHandler, logoutHandler, profileUpdateHandler, checkAuthHandler }