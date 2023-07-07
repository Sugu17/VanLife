import NavLinks, { NavInfo } from "../NavLinks";

function Logo() {
  return (
    <span className="text-[26px] font-black tracking-tight">#VANLIFE</span>
  );
}

function NavBar() {
  const navItems: NavInfo[] = [
    { name: "About", to: "/about" },
    { to: "/vans", name: "Vans" },
  ];
  return (
    <div className="flex justify-between items-center px-6 py-9 bg-[#FFF7ED]">
      <Logo />
      <NavLinks info={navItems} />
    </div>
  );
}
export default NavBar;