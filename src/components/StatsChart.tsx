import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { Mail } from "../types/Mail";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

interface Props {
  emails: Mail[];
}

const StatsChart = ({ emails }: Props) => {
  const senderMap: Record<string, number> = {};

  emails.forEach((mail) => {
    senderMap[mail.from] =
      (senderMap[mail.from] || 0) + 1;
  });

  const data = {
    labels: Object.keys(senderMap),
    datasets: [
      {
        label: "Emails per sender",
        data: Object.values(senderMap),
      },
    ],
  };

  return (
    <div className="mt-6">
      <Bar data={data} />
    </div>
  );
};

export default StatsChart;