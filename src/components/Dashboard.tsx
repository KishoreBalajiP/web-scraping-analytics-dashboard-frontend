import { useState, useEffect } from 'react';
import { api, AnalyticsData, TelemetryData, Message } from '../services/api';
import TelemetryPanel from './TelemetryPanel';
import CategoryChart from './CategoryChart';
import DailyChart from './DailyChart';
import MessageTable from './MessageTable';
import ScraperButton from './ScraperButton';
import { RefreshCw } from 'lucide-react';

export default function Dashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [telemetry, setTelemetry] = useState<TelemetryData | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAllData = async () => {
    try {
      const [analyticsData, telemetryData, messagesData] = await Promise.all([
        api.getAnalytics(),
        api.getTelemetry(),
        api.getMessages(),
      ]);
      setAnalytics(analyticsData);
      setTelemetry(telemetryData);
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchAllData();
  };

  const handleScraperComplete = () => {
    handleRefresh();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Web Scraping Analytics Dashboard
          </h1>
          <div className="flex gap-4">
            <ScraperButton onScraperComplete={handleScraperComplete} />
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <RefreshCw size={18} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing...' : 'Refresh Analytics'}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <TelemetryPanel telemetry={telemetry} loading={loading} />
        </div>

        {analytics && (
          <div className="mb-6 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-2">Total Messages</h2>
            <p className="text-4xl font-bold text-blue-600">{analytics.totalMessages}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {analytics && analytics.categoryCounts.length > 0 && (
            <CategoryChart data={analytics.categoryCounts} />
          )}
          {analytics && analytics.dailyCounts.length > 0 && (
            <DailyChart data={analytics.dailyCounts} />
          )}
        </div>

        <MessageTable messages={messages} loading={loading} />
      </div>
    </div>
  );
}
