interface Props {
  name: string;
  price: number;
  imgURL: string;
  editable?: boolean;
}

function VanMedia(props: Props) {
  return (
    <div className="bg-white rounded-md px-6 py-[18px] max-h-[102px] flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4">
        <img
          src={props.imgURL}
          alt=""
          className="rounded-[5px] object-contain aspect-square max-h-16"
        />
        <div className="text-left flex flex-col justify-center py-2">
          <h2 className="capitalize font-semibold text-xl">{props.name}</h2>
          <span className="text-neutral-600">${props.price} / day</span>
        </div>
      </div>
      <span className={props.editable ? "text-neutral-900" : "hidden"}>
        Edit
      </span>
    </div>
  );
}
export default VanMedia;
