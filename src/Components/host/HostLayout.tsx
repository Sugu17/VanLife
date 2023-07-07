import { Outlet } from "react-router-dom";
import NavLinks, { NavInfo } from "../NavLinks";

function HostLayout() {
  const navLinks: NavInfo[] = [
    { name: "DashBoard", to: "" },
    { name: "Income", to: "" },
    { name: "Vans", to: "" },
    { name: "Reviews", to: "" },
  ];
  return (
    <div className="flex flex-col gap-11 py-4 pb-14">
      <div className="px-6">
        <NavLinks info={navLinks} textSize="lg" />
      </div>
      <Outlet />
    </div>
  );
}
export default HostLayout;
