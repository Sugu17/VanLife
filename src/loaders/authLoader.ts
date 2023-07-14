import { redirect } from "react-router-dom";
import { getUserData } from "~/utils/getUserData.ts";

export default async function authLoader() {
  const user = await getUserData();
  console.log(user);
  if (user) return redirect("/login");
  else return null;
}
