import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req) {
    try {
        await connectDB();

        const val = await cookies(); // ✅ Get token from cookies
        const token  = val.get("token")?.value;
        console.log(token);
        if (!token) {
            return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
        }
        const decoded = jwt.verify(token, "your_super_secret_key");
        const user = await User.findById(decoded.userId).select("-password"); // Exclude password

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
