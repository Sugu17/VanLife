import { NavLink } from "react-router-dom";

export interface NavInfo {
  to: string;
  name: string;
}

interface Props {
  info: NavInfo[];
  textSize: "lg" | "sm";
}

function NavItem(props: NavInfo) {
  const linkStyles =
    "border-b-2 hover:border-b-neutral-800 hover:text-neutral-950 ";
  const activeStyle = " border-b-neutral-800 text-neutral-950";
  return (
    <NavLink
      to={props.to}
      className={(data) =>
        data.isActive
          ? linkStyles + activeStyle
          : linkStyles + " border-b-transparent"
      }
    >
      {props.name}
    </NavLink>
  );
}

type TextSize = {
  [key in Props["textSize"]]: string;
};

function NavLinks(props: Props) {
  const textSizes: TextSize = {
    lg: "text-lg",
    sm: "text-base",
  };
  return (
    <div
      className={
        "flex gap-5 text-[#4D4D4D] font-semibold capitalize " +
        textSizes[props.textSize]
      }
    >
      {props.info.map((info, index) => (
        <NavItem key={index} {...info} />
      ))}
    </div>
  );
}
export default NavLinks;
