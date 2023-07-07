import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Grid(props: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 5fr 0.5fr",
        height: "100vh",
      }}
      className="overflow-x-hidden bg-[#FFF7ED]"
    >
      {props.children}
    </div>
  );
}
export default Grid;
