import jwt from 'jsonwebtoken';
import User from '../models/auth.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(400).json({ message: 'unAuthorized Request. Please login first!', success: false });
        // Compare token with decoded...............
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) return res.status(400).json({ message: 'unAuthorized Request. Please login first!', success: false });
        // Find user with help of using token userId..........
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(400).json({ message: 'User not found.', success: false });
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in authCheck middleware", error.message);
        res.status(500).json({
            message: "Internal Sever error!",
            error: error.message,
            success: false,
        })
    }
}