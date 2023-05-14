import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },

        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Post", postSchema);

