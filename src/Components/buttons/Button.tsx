import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Button(props: Props) {
  return (
    <button className="w-full font-bold text-center bg-[#FF8C38] p-3 rounded-md text-neutral-50">
      {props.children}
    </button>
  );
}
export default Button;
