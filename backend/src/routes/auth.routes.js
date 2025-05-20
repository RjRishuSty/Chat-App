import { Router } from "express";
import { checkAuthHandler, loginHandler, logoutHandler, profileUpdateHandler, signupHandler } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middlewares/protectRoute.middleware.js";

const router = Router();

router.post("/signup", signupHandler)
router.post("/login", loginHandler)
router.post("/logout", logoutHandler)
router.put("/profile-update", protectRoute, profileUpdateHandler)
router.get("/check-auth", protectRoute, checkAuthHandler)







export default router;