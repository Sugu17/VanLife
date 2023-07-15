import { Form, useLoaderData } from "react-router-dom";
import Button from "~/Components/buttons/Button";

function LoginPage() {
  const promptMessage = useLoaderData() as string;
  return (
    <div className="flex flex-col px-3 sm:px-6 py-4 pb-20 gap-8 items-center">
      {/* Conditionaly render prompt message from authLoader */}

      <h2 className="text-3xl font-bold text-neutral-900">
        {promptMessage ? promptMessage : "Sign in to your account"}
      </h2>
      <Form
        action="/login"
        method="POST"
        className="flex flex-col gap-7 w-full"
      >
        {/* Input group */}
        <div className="flex flex-col border-[1.5px] border-[#D1D5DB] rounded-md overflow-hidden shadow-sm">
          {/* Text Input */}
          <input
            type="text"
            name="email"
            className="p-3 w-full placeholder:text-neutral-500 border-b-[1.5px] border-[#D1D5DB] font-normal focus:outline-none"
            placeholder="Email address"
          />
          {/* Password Input */}
          <input
            type="password"
            name="password"
            className="p-3 w-full placeholder:text-neutral-500 font-normal focus:outline-none"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full font-bold text-center bg-[#FF8C38] p-3 rounded-md text-neutral-50"
        >
          Sign in
        </button>
      </Form>
      <span className="text-neutral-900">
        Don't have an account?{" "}
        <span className="text-[#FF8C38] font-bold">Create one now</span>
      </span>
    </div>
  );
}
export default LoginPage;
