import incomeChart_1x from "@assets/images/chart-1x.png";
import incomeChart_2x from "@assets/images/chart-2x.png";
import IncomeCard from "./IncomeCard";

function HostIncomePage() {
  const transactionCards: { income: number; date: string }[] = [
    { income: 720, date: "1/12/23" },
    { income: 560, date: "10/11/23" },
    { income: 980, date: "23/11/23" },
  ];
  return (
    <div className="flex flex-col gap-14">
      {/* Income header */}
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl text-neutral-900 font-bold">Income</h2>
        <span>
          <span className="text-neutral-500">
            Last&nbsp;
            <span className="text-neutral-700 underline font-semibold">
              30 days
            </span>
          </span>
        </span>
        {/* Income amount */}
        <span className="text-5xl font-bold text-neutral-900">$2,260</span>
      </div>
      {/* Income chart */}
      <img srcSet={`${incomeChart_2x}`} src={incomeChart_1x} alt="" />
      {/* Income transactions */}
      <div>
        {/* Transaction Header */}
        <div className="flex justify-between flex-nowrap items-end">
          <h3 className="text-neutral-900 text-xl font-bold  ">
            Your transactions (3)
          </h3>
          <span className="text-neutral-500">
            Last&nbsp;
            <span className="text-neutral-700 underline font-semibold">
              30 days
            </span>
          </span>
        </div>
        {/* Transaction cards */}
        <div className="flex flex-col gap-6 pt-5">
          {transactionCards.map((transaction, index) => (
            <IncomeCard key={index} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default HostIncomePage;
