import { useOutletContext } from "react-router-dom";

interface Props {
  name: string;
  price: number;
  type: string;
  imgURL: string;
  desc: string;
}

function HostVanInfo() {
  const props: Props = useOutletContext();
  return (
    <div className="flex flex-col gap-4">
      <span className="text-base text-neutral-950 font-bold">
        Name:&nbsp;
        <span className="font-medium">{props.name}</span>
      </span>
      <span className="text-base text-neutral-950 font-bold">
        Category:&nbsp;
        <span className="font-medium">{props.type}</span>
      </span>
      <span className="text-base text-neutral-950 font-bold">
        Description:&nbsp;
        <span className="font-medium">{props.desc}</span>
      </span>
      <span className="text-base text-neutral-950 font-bold">
        Visibility:&nbsp;
        <span className="font-medium">Public</span>
      </span>
    </div>
  );
}
export default HostVanInfo;
