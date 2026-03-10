import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { CategoryCount } from '../services/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CategoryChartProps {
  data: CategoryCount[];
}

export default function CategoryChart({ data }: CategoryChartProps) {
  const chartData = {
    labels: data.map((item) => item._id),
    datasets: [
      {
        label: 'Messages by Category',
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Messages by Category',
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="h-80">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
