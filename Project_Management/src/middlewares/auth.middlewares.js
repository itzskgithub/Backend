import { User } from "../models/user.models.js"
import { Apierrors } from "../utils/api_errors.js"
import { asyncHandler } from "../utils/async_handler.js"
import jwt from 'jsonwebtoken'




export const verifyJWT = asyncHandler(async (req, res, next) => {

    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
        throw new Apierrors(401, "Unauthorized request")
    }
    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken -emailVerificationToken -emailVerificationExpiry");

        if (!user) {
            throw new Apierrors(401, "Invalid access token")
        }

        req.user = user
        next()
    } catch (error) {
        throw new Apierrors(401, "Invalid access token")
    }
})