import { findUserById } from "../dao/user.dao.js"
import { verifyToken } from "../utills/helper.js"

export const authMiddleware = async (req , res ,next) => {
    const token = req.cookies.accessToken
    if(!token) return res.status(401).json({message:"Unauthorized: No token"})

        try {
            const decoded = verifyToken(token)
            const user = await findUserById(decoded)
            if(!user) return res.status(401).json({message:"Unauthorized: User not found"})
            req.user = user
            next()
        } catch (error) {
            return res.status(401).json({message:"Unauthorized: Invalid token",error})
        }
}