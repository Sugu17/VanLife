import { redirect } from "react-router-dom";

// interface FormActionArgs {
//   params: object;
//   request: Request;
// }
// export default async function loginFormAction({ request }: FormActionArgs) {
export default async function loginFormAction() {
  // const formData = await request.formData();
  // const name = formData.get("email");
  // const password = formData.get("password");
  localStorage.setItem("user", "Wade");
  return redirect("/host");
}
