import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    
    await connectDB();
    
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Use environment variable for security
    const token = jwt.sign({ userId: user._id }, "your_super_secret_key", { expiresIn: "1d" });

    // Set cookies securely
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/",
    });

    cookies().set("user", JSON.stringify({ id: user._id, email: user.email }), {
      httpOnly: false, // Client can access this
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/",
    });

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ message: "Error logging in" }, { status: 500 });
  }
}
