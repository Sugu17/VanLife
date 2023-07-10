interface Props {
  income: number;
  date: string;
}

function IncomeCard(props: Props) {
  return (
    <div className="px-6 py-5 rounded-md bg-white flex flex-nowrap justify-between items-center">
      <span className="text-4xl font-semibold">${props.income}</span>
      <span className="text-neutral-600 whitespace-nowrap">{props.date}</span>
    </div>
  );
}
export default IncomeCard;
