interface FormActionArgs {
  params: object;
  request: Request;
}

export default async function loginFormAction({ request }: FormActionArgs) {
  const formData = await request.formData();
  console.log(formData);
  return "Response sent";
}
