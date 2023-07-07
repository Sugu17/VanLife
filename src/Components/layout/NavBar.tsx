import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <span className="text-[26px] font-black tracking-tight">#VANLIFE</span>
  );
}

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
