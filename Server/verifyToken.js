import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return next(createError(401, "You are not Authenticated"));
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) { return next(createError(401, " Token is not Valid ")); }
        req.userId = payload._id;
        req.isAdmin = payload.isAdmin;
        next();
    });

}

// verify token and authorization
export const vTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.userId === req.params.id || req.isAdmin) {
            next();
        }else {
            return next(createError(403, "You are not allowed to do that"));
        }
    });
}

// verify token and authorization for admin
export const vTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.isAdmin) {
            next();
        }else {
            return next(createError(403, "You are not allowed to do that"));
        }
    });
}


