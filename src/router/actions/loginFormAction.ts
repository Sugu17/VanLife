interface FormActionArgs {
  params: object;
  request: Request;
}

export default async function loginFormAction(actionArgs: FormActionArgs) {
  console.log("Form submited ");
  return null;
}
