import { NavLink } from "react-router-dom";

export interface NavInfo {
  to: string;
  name: string;
  end?: boolean;
}

interface Props {
  info: NavInfo[];
  textSize: "lg" | "sm";
  end?: boolean;
}

function NavItem(props: NavInfo) {
  const linkStyles =
    "border-b-2 hover:border-b-neutral-800 hover:text-neutral-950 ";
  const activeStyle = " border-b-neutral-800 text-neutral-950";
  return (
    <NavLink
      to={props.to}
      end={props.end ? props.end : undefined}
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
        "flex flex-row gap-5 text-[#4D4D4D] font-semibold capitalize " +
        textSizes[props.textSize]
      }
    >
      {props.info.map((info, index) => (
        <NavItem key={index} name={info.name} to={info.to} end={props.end} />
      ))}
    </div>
  );
}
export default NavLinks;
