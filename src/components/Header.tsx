import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center gap-3 mb-6">
      <Mail className="text-indigo-600" />
      <h1 className="text-2xl font-bold">
        Web Scraping Analytics Dashboard
      </h1>
    </header>
  );
};

export default Header;