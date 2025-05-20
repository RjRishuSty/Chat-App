import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    fullname: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        unique: true,
        requried: true,
    },
    password: {
        requried: true,
        type: String,
        minlength: 6
    },
    profilePic: {
        type: String,
        default: "",
    }
},{timestamps:true});

const authModel = mongoose.model("User", authSchema);

export default authModel;