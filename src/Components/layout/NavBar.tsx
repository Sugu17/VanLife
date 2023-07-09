import NavLinks, { NavInfo } from "../NavLinks";

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
    <div className="flex justify-between items-center px-6 py-9">
      <Logo />
      <NavLinks info={navItems} textSize="sm" />
    </div>
  );
}
export default NavBar;
