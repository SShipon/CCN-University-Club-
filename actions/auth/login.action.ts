"use server";

import { connectDB } from "@/lib/mongoose";
import { User } from "@/models/user.model";
import bcrypt from "bcrypt";
import { setLoginSession } from "@/utils/auth";
import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
  await connectDB();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and Password are required!");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found!");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password!");
  }

  await setLoginSession(user._id.toString());

  redirect("/dashboard");
}
