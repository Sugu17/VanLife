interface FormActionArgs {
  params: object;
  request: Request;
}

export default async function loginFormAction({ request }: FormActionArgs) {
  const formData = await request.formData();
  const name = formData.get("email");
  const password = formData.get("password");
  console.log(name, password);
  return null;
}
