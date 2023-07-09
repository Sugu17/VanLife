import { Outlet } from "react-router-dom";
import NavLinks, { NavInfo } from "../NavLinks";

function HostLayout() {
  const navLinks: NavInfo[] = [
    { name: "DashBoard", to: "." },
    { name: "Income", to: "income" },
    { name: "Vans", to: "vans" },
    { name: "Reviews", to: "reviews" },
  ];
  return (
    <div className="flex flex-col gap-11 py-4 px-3 sm:px-6 pb-14">
      <div>
        <NavLinks info={navLinks} textSize="lg" end />
      </div>
      <Outlet />
    </div>
  );
}
export default HostLayout;
