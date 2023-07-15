import { redirect } from "react-router-dom";
import { getUserData } from "~/utils/getUserData.ts";

export default async function requireAuth() {
  const user = localStorage.getItem("user");
  if (!user) {
    return redirect("/login?msg=Please login to your account");
  } else redirect("/host");
}
