import { useOutletContext } from "react-router-dom";

interface Props {
  name: string;
  price: number;
  type: string;
  imgURL: string;
  desc: string;
}

function Price() {
  const { price }: Props = useOutletContext();
  return (
    <span className="text-4xl text-neutral-950">
      ${price}
      <span className="text-xl text-neutral-700">/day</span>
    </span>
  );
}
export default Price;
