import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//import Routes
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js';
import commentRoutes from './routes/comment.js';



const app = express();
dotenv.config();

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB Connection Successfully");
        })
        .catch((err) => {
            console.log("MongoDB Connection Failed ");
            console.log(err);
        });
};

//middleware
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

//error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went Wrong";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,

    });

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port: ${PORT}`);
});