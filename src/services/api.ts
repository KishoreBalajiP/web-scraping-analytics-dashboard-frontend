import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export interface Message {
  sender: string;
  subject: string;
  category: string;
  timestamp: string;
}

export interface CategoryCount {
  _id: string;
  count: number;
}

export interface DailyCount {
  _id: string;
  count: number;
}

export interface AnalyticsData {
  totalMessages: number;
  categoryCounts: CategoryCount[];
  dailyCounts: DailyCount[];
}

export interface TelemetryData {
  lastScrapeTime: string;
  totalMessagesStored: number;
  numberOfScrapes: number;
  recordsInsertedLastRun: number;
}

export interface ScrapeResponse {
  message: string;
  inserted: number;
}

export const api = {
  runScraper: async (): Promise<ScrapeResponse> => {
    const response = await axios.get(`${API_BASE_URL}/scrape`);
    return response.data;
  },

  getMessages: async (): Promise<Message[]> => {
    const response = await axios.get(`${API_BASE_URL}/messages`);
    return response.data;
  },

  getAnalytics: async (): Promise<AnalyticsData> => {
    const response = await axios.get(`${API_BASE_URL}/analytics`);
    return response.data;
  },

  getTelemetry: async (): Promise<TelemetryData> => {
    const response = await axios.get(`${API_BASE_URL}/telemetry`);
    return response.data;
  },
};
