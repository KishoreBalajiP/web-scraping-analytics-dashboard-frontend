import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">

        <div className="bg-indigo-100 p-2 rounded-lg">
          <Mail className="text-indigo-600" />
        </div>

        <h1 className="text-xl font-semibold tracking-tight">
          Web Scraping Analytics Dashboard
        </h1>

      </div>

    </header>
  );
};

export default Header;