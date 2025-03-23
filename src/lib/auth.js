import jwt from "jsonwebtoken";

export function generateToken(user) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" }); // ✅ 1-day expiry
    console.log("token:",token);
}

export function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        return null;
    }
}

