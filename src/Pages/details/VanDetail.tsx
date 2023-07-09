import { VanData } from "../../data/data";
import Button from "../../Components/buttons/Button";
import CategoryButton, {
  Variants,
} from "../../Components/buttons/CategoryButton";

export default function VanDetail(props: VanData) {
  return (
    <div className="flex flex-col gap-3">
      <CategoryButton
        variant={
          (props.type.charAt(0).toUpperCase() + props.type.slice(1)) as Variants
        }
      >
        {props?.type}
      </CategoryButton>
      <h2 className="font-bold text-[32px] text-neutral-950">{props?.name}</h2>
      <div>
        <span className="text-neutral-950 text-2xl">${props?.price}</span>
        <span className="text-neutral-900">/day</span>
      </div>
      <p className="text-neutral-950 pt-2">{props?.description}</p>
      <div className="pt-2">
        <Button>Rent this van</Button>
      </div>
    </div>
  );
}
