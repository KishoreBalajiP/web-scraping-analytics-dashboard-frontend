import { TelemetryData } from '../services/api';

interface TelemetryPanelProps {
  telemetry: TelemetryData | null;
  loading: boolean;
}

export default function TelemetryPanel({ telemetry, loading }: TelemetryPanelProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Telemetry</h2>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!telemetry) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Telemetry</h2>
        <p className="text-gray-500">No telemetry data available</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Telemetry</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <p className="text-sm text-gray-600">Last Scrape Time</p>
          <p className="text-lg font-semibold">{formatDate(telemetry.lastScrapeTime)}</p>
        </div>
        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-sm text-gray-600">Total Messages Stored</p>
          <p className="text-lg font-semibold">{telemetry.totalMessagesStored}</p>
        </div>
        <div className="border-l-4 border-yellow-500 pl-4">
          <p className="text-sm text-gray-600">Number of Scrapes</p>
          <p className="text-lg font-semibold">{telemetry.numberOfScrapes}</p>
        </div>
        <div className="border-l-4 border-orange-500 pl-4">
          <p className="text-sm text-gray-600">Records Inserted Last Run</p>
          <p className="text-lg font-semibold">{telemetry.recordsInsertedLastRun}</p>
        </div>
      </div>
    </div>
  );
}
