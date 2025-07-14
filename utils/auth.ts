import { cookies } from "next/headers";

export async function setLoginSession(userId: string) {
  (await cookies()).set("club_token", userId, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function getLoggedUser() {
  const cookie = (await cookies()).get("club_token");
  return cookie?.value || null;
}

export async function logoutSession() {
  (await cookies()).delete("club_token");
}
