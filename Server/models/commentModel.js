import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        postId: {
            type: String,
            required: true,
        },
        
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);