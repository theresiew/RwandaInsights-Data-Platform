import { Link } from "react-router-dom";
import { BarChart2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-700">
            <BarChart2 size={24} />
            RwandaInsights
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Dashboard
            </Link>
            <Link to="/economy" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Economy
            </Link>
            <Link to="/population" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Population
            </Link>
            <Link to="/health" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Health
            </Link>
            <Link to="/education" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Education
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">🇷🇼 Rwanda</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              Live Data
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;gi