import { registerUser } from "@/actions/auth/register.action";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form
        action={registerUser}
        className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-xl border"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700">Create an Account</h1>

        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter your name"
            className="p-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

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
          Register Now
        </button>

        <p className="text-center text-gray-600 text-sm">
          Already have an account? <a href="/login" className="text-indigo-700 font-semibold hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}
