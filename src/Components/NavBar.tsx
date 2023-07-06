import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  const linkStyles =
    "border-b-2 hover:border-b-neutral-800 hover:text-neutral-950";
  const activeStyle = " border-b-neutral-800 text-neutral-950";

  return (
    <div className="flex justify-between items-center px-6 py-9 bg-[#FFF7ED]">
      <Logo />
      <div className="flex gap-5 text-[#4D4D4D] font-semibold">
        <NavLink
          to={"/about"}
          className={(data) =>
            data.isActive
              ? linkStyles + activeStyle
              : linkStyles + " border-b-transparent"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/vans"}
          className={(data) =>
            data.isActive
              ? linkStyles + activeStyle
              : linkStyles + " border-b-transparent"
          }
        >
          Vans
        </NavLink>
      </div>
    </div>
  );
}
export default NavBar;
