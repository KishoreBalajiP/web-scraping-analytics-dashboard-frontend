import { useState } from "react";

import FetchButton from "../components/FetchButton";
import Header from "../components/Header";
import MailList from "../components/MailList";
import SearchBar from "../components/SearchBar";
import StatsChart from "../components/StatsChart";

import {
  fetchEmails,
  searchEmails,
} from "../services/api";

import { Mail } from "../types/Mail";

const Dashboard = () => {
  const [emails, setEmails] =
    useState<Mail[]>([]);

  const [keyword, setKeyword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

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
    <div className="max-w-4xl mx-auto p-6">
      <Header />

      <FetchButton onFetch={handleFetch} />

      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={handleSearch}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <MailList emails={emails} />
          <StatsChart emails={emails} />
        </>
      )}
    </div>
  );
};

export default Dashboard;