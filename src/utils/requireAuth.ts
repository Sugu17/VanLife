import { redirect } from "react-router-dom";

export default async function requireAuth() {
  const user = localStorage.getItem("user");
  if (!user) {
    return redirect("/login?msg=Please login to your account");
  } else return null;
}
