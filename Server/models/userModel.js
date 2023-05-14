import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {

        username: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        profilImg: {
            type: String,
            default: "",
        },
        coverImg: {
            type: String,
            default: "",
        },
        friendsId: {
            type: Array,
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);