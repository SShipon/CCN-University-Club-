
"use server";

import { connectDB } from "@/lib/mongoose";

export default async function Home() {
  await connectDB();

  return (
    <main className="flex justify-center items-center min-h-screen text-3xl text-green-700">
      🎉 MongoDB Connected & University Club Ready!
    </main>
  );
}
