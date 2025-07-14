"use server";

import { connectDB } from "@/lib/mongoose";
import { User } from "@/models/user.model";
import bcrypt from "bcrypt";
import { setLoginSession } from "@/utils/auth";
import { redirect } from "next/navigation";

export async function loginUser(_: any, formData: FormData) {
  await connectDB();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and Password are required!" };
  }

  const user = await User.findOne({ email });
  if (!user) {
    return { error: "User not found!" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { error: "Invalid password!" };
  }

  await setLoginSession(user._id.toString());

  return { success: "Login successful!" };
}
