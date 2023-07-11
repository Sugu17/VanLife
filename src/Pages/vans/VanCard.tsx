import { Link } from "react-router-dom";
import CategoryButton, { Variants } from "@components/buttons/CategoryButton";
import { useContext } from "react";
import { FilterParamsContext } from "~/contexts/FilterParamsContext";

interface Props {
  id: number;
  name: string;
  price: number;
  type: string;
  imgURL: string;
}

function VanCard(props: Props) {
  // Access card type filter used in VansPage via React Context
  const filterParams = useContext(FilterParamsContext);
  return (
    <Link to={`/vans/${props.id}`} state={filterParams}>
      <div className="flex flex-col gap-0">
        <div className="aspect-square w-full">
          <img
            className="rounded-[5px] object-contain"
            src={props.imgURL}
            alt=""
          />
        </div>
        <div className="flex flex-row justify-between mt-4">
          <h2 className="text-neutral-950 font-semibold text-lg text-left">
            {props.name}
          </h2>
          <div className="flex flex-col items-end gap-0">
            <span className="text-neutral-950 font-semibold text-xl">
              ${props.price}
            </span>
            <span className="text-right text-sm text-neutral-900">/day</span>
          </div>
        </div>
        <CategoryButton
          variant={
            (props.type[0].toUpperCase() + props.type.slice(1)) as Variants
          }
          selected
        >
          {props.type}
        </CategoryButton>
      </div>
    </Link>
  );
}
export default VanCard;
