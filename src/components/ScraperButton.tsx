import { useState } from 'react';
import { api } from '../services/api';
import { Play } from 'lucide-react';

interface ScraperButtonProps {
  onScraperComplete: () => void;
}

export default function ScraperButton({ onScraperComplete }: ScraperButtonProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleRunScraper = async () => {
    setLoading(true);
    setMessage('');
    try {
      const result = await api.runScraper();
      setMessage(`${result.message} - ${result.inserted} records inserted`);
      onScraperComplete();
    } catch (error) {
      setMessage('Error running scraper. Please check the backend connection.');
      console.error('Scraper error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleRunScraper}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Play size={18} />
        {loading ? 'Running Scraper...' : 'Run Scraper'}
      </button>
      {message && (
        <p className={`text-sm ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
