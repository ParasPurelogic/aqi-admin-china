"use client";

import cn from "@/utility/cn";
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

type Props = {
  className?: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
};

const options: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as "index",
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 0,
  },
};

const PieChart = (props: Props) => {
  // Chart Data
  const chartData = {
    labels: props.labels ?? [],
    datasets: props.datasets ?? [],
  };

  // Return JSX
  return (
    <div className={cn("pie-chart aspect-square", props.className)}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
