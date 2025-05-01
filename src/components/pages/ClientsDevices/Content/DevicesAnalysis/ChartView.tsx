import { DropdownSelector, PieChart } from "@/components/ui";
import { Plan, UserDevice } from "@/fetch-data/Types";
import cn from "@/utility/cn";
import formatNumber from "@/utility/formatNumber";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
  devices: UserDevice[];
  plans: Plan[];
};

type ChartData = {
  name: string;
  count: number;
  color?: string;
}[];

const options = [
  {
    id: "device",
    name: "设备状态",
  },
  {
    id: "plan",
    name: "计划状态",
  },
];

const ChartView = (props: Props) => {
  // Chart Data
  const [chartData, setChartData] = useState<ChartData | null>(null);

  // Selected Option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Populate Data into chartData
  useEffect(() => {
    // If selected option is device
    if (selectedOption.id == "device") {
      const totalDevices = props.devices.length;
      const premiumDevices = [...props.devices].filter(
        (d) => d.is_devicehavelicense
      ).length;

      // Set Chart Data
      setChartData([
        {
          name: "设备总数",
          count: totalDevices,
        },
        {
          name: "优质设备",
          count: premiumDevices,
          color: "#67C587",
        },
        {
          name: "非优质设备",
          count: totalDevices - premiumDevices,
          color: "#C1EED0",
        },
      ]);
    }

    // If selected option is plan
    else if (selectedOption.id == "plan") {
      // Plans
      const plansCount: ChartData = [];

      props.plans.forEach((plan, i) =>
        plansCount.push({
          name: plan.PlanName ?? "N/A",
          count: [...props.devices].filter(
            (d) => d?.licenceData?.plan_id == plan.id
          ).length,
          color: ["#C1EED0", "#67C587", "#EAFAEE"][i],
        })
      );

      // Set Chart Data
      setChartData([
        {
          name: "总计优质设备",
          count: plansCount.reduce((a, b) => a + b.count, 0),
        },
        ...plansCount,
      ]);
    }

    // eslint-disable-next-line
  }, [selectedOption]);

  // Return JSX
  return (
    <div
      className={cn(
        "chart-view min-h-fit h-full flex flex-col gap-[2rem] bg-[#F4F7FE] p-[3rem] rounded-[2rem]",
        props.className
      )}
    >
      {/* Option Selector */}
      <DropdownSelector
        className="ml-auto"
        selectedOption={options[0]}
        options={options}
        onSelect={setSelectedOption}
      />

      {/* Chart */}
      <div className="chart min-h-fit h-2/4 grow flex gap-[2rem] mt-[2rem] w-full flex-col items-center justify-center">
        {/* Chart */}
        <div className="chart flex w-fit items-center justify-center">
          {chartData && (
            <PieChart
              className="h-[30rem]"
              labels={[...chartData].filter((d) => d.color).map((d) => d.name)}
              datasets={[
                {
                  label: selectedOption.name,
                  data: [...chartData]
                    .filter((d) => d.color)
                    .map((d) => d.count),
                  // @ts-ignore
                  backgroundColor: [...chartData]
                    .filter((d) => d.color)
                    .map((d) => d.color),
                },
              ]}
            />
          )}
        </div>

        {/* Values */}
        <div className="values w-full grid gap-[1.2rem] mt-[3rem]">
          {chartData?.map((d, i) => (
            <div key={i} className="flex gap-[1.5rem] items-center flex-wrap">
              {d.color && (
                <span
                  className="aspect-square w-[1.7rem] rounded-[0.3rem]"
                  style={{ backgroundColor: d.color }}
                ></span>
              )}
              <span>{d.name}</span>
              <span className="font-extrabold text-[1.8rem] ml-auto">
                {formatNumber(d.count)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartView;
