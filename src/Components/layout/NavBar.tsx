import { Link } from "react-router-dom";
import NavLinks, { NavInfo } from "../NavLinks";
import { FaRegCircleUser } from "react-icons/fa6";

function Logo() {
  return (
    <span className="text-[26px] font-black tracking-tight">#VANLIFE</span>
  );
}

function NavBar() {
  const navItems: NavInfo[] = [
    { to: "host", name: "Host" },
    { to: "about", name: "About" },
    { to: "vans", name: "Vans" },
  ];
  return (
    <div className="flex justify-between items-center px-3 sm:px-6  py-9">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="flex flex-nowrap gap-5 items-center">
        <NavLinks info={navItems} textSize="sm" />
        <Link to={"/login"}>
          <span className="text-2xl">
            <FaRegCircleUser />
          </span>
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
