import { useState } from "react";

import FetchButton from "../components/FetchButton";
import Header from "../components/Header";
import MailList from "../components/MailList";
import SearchBar from "../components/SearchBar";
import StatsChart from "../components/StatsChart";

import { fetchEmails, searchEmails } from "../services/api";
import { Mail } from "../types/Mail";

const Dashboard = () => {
  const [emails, setEmails] = useState<Mail[]>([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    const data = await fetchEmails();
    setEmails(data);
    setLoading(false);
  };

  const handleSearch = async () => {
    setLoading(true);
    const data = await searchEmails(keyword);
    setEmails(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-6">

        {/* Control Panel */}
        <div className="bg-white shadow rounded-2xl p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <FetchButton onFetch={handleFetch} />

          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            onSearch={handleSearch}
          />
        </div>

        {/* Dashboard Content */}
        {loading ? (
          <div className="text-center text-lg font-medium text-gray-600 mt-10">
            Loading dashboard data...
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Email List */}
            <div className="lg:col-span-2 bg-white shadow rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4">
                Email Insights
              </h2>

              <MailList emails={emails} />
            </div>

            {/* Chart */}
            <div className="bg-white shadow rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4">
                Sender Statistics
              </h2>

              <StatsChart emails={emails} />
            </div>

          </div>
        )}

      </main>
    </div>
  );
};

export default Dashboard;