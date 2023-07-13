import { Outlet } from "react-router-dom";
import CategoryButton, { Variants } from "@components/buttons/CategoryButton";
import NavLinks, { NavInfo } from "@components/NavLinks";

interface VanCardProps {
  name?: string;
  price?: number;
  type: string;
}

function VanCardDetail({ name, price, type }: VanCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <CategoryButton
        variant={(type.charAt(0).toUpperCase() + type.slice(1)) as Variants}
      >
        {type}
      </CategoryButton>
      <div>
        <h2 className="my-2 text-neutral-950 text-2xl leading-none font-bold text-left">
          {name}
        </h2>
        <span className="text-neutral-800">
          <span className="text-xl font-bold text-neutral-950">${price}</span>
          &nbsp;/&nbsp;day
        </span>
      </div>
    </div>
  );
}

interface Props {
  name?: string;
  price?: number;
  type: string;
  imgURL?: string;
  desc?: string;
}

function HostVanDetailCard({ imgURL, name, price, type, desc }: Props) {
  const navLinks: NavInfo[] = [
    { to: "", name: "Details" },
    { to: "pricing", name: "Pricing" },
    { to: "photos", name: "Photos" },
  ];
  return (
    <div className="flex flex-col gap-7 p-6 bg-white rounded-md">
      <div className="flex flex-row items-center gap-5">
        <div className="w-[180px]">
          <img
            className="rounded-md aspect-square object-contain w-full"
            src={imgURL}
            alt=""
          />
        </div>
        <VanCardDetail name={name} price={price} type={type} />
      </div>
      <NavLinks info={navLinks} textSize="sm" end />
      <Outlet context={{ name, price, type, imgURL, desc }} />
    </div>
  );
}
export default HostVanDetailCard;
