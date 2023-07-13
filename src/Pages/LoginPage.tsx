import Button from "~/Components/buttons/Button";

function LoginPage() {
  return (
    <div className="flex flex-col px-3 sm:px-6 py-4 pb-20 gap-12 items-center">
      <h2 className="text-3xl font-bold text-neutral-900">
        Sign in to your account
      </h2>
      <form className="flex flex-col gap-7">
        {/* Input group */}
        <div className="flex flex-col border-[1.5px] border-[#D1D5DB] rounded-md overflow-hidden shadow-sm">
          {/* Text Input */}
          <input
            type="text"
            name="email"
            id="email"
            className="p-3 w-full placeholder:text-neutral-500 border-b-[1.5px] border-[#D1D5DB] font-normal"
            placeholder="Email address"
          />
          {/* Password Input */}
          <input
            type="password"
            name="password"
            id="password"
            className="p-3 w-full placeholder:text-neutral-500 font-normal"
            placeholder="Password"
          />
        </div>
        <Button>Sign in</Button>
      </form>
      <span className="text-neutral-900">
        Don't have an account?{" "}
        <span className="text-[#FF8C38] font-bold">Create one now</span>
      </span>
    </div>
  );
}
export default LoginPage;
