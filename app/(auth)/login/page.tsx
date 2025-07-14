"use client";

import { loginUser } from "@/actions/auth/login.action";
import { useFormState } from "react-dom";
export default function LoginPage() {
  const [state, formAction] = useFormState(loginUser, null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form
        action={formAction}
        className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-xl border"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700">Login to Your Account</h1>

        {state?.error && (
          <p className="text-center text-red-600 font-semibold">{state.error}</p>
        )}
        {state?.success && (
          <p className="text-center text-green-600 font-semibold">{state.success}</p>
        )}

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
          <input
            name="email"
            id="email"
            placeholder="Enter your email"
            className="p-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            className="p-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login Now
        </button>

        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-700 font-semibold hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
}
