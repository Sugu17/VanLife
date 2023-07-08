import { useOutletContext } from "react-router-dom";

interface Props {
  name: string;
  price: number;
  type: string;
  imgURL: string;
  desc: string;
}

function HostVanImage() {
  const { imgURL }: Props = useOutletContext();
  return (
    <div className="max-w-[102px]">
      <img src={imgURL} className="aspect-square rounded-md" alt="" />
    </div>
  );
}
export default HostVanImage;
