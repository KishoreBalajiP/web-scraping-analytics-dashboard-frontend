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

  // Limit to top 6 senders (prevents overcrowding)
  const sortedSenders = Object.entries(senderMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const data = {
    labels: sortedSenders.map(([sender]) =>
      sender.length > 18
        ? sender.substring(0, 18) + "..."
        : sender
    ),
    datasets: [
      {
        label: "Emails per sender",
        data: sortedSenders.map(
          ([, count]) => count
        ),
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
    },
  };

  return (
    <div className="h-[320px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatsChart;