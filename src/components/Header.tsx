import React, { useState } from "react";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-8 lg:px-8">
        <div className="flex items-center justify-between h-16 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/images/logo.jpg"
              alt="Harishyam Infra"
              className="h-12 w-auto object-contain rounded-xl border-2 border-gray-200 shadow-md"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-emerald-700">Shri Hari Vatika</span>
              <span className="text-xs text-gray-600">Premium Plots & Properties</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              to="/project"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Our Project
            </Link>
            <Link
              to="/premium-plots"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Premium Plots
            </Link>

            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Features
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    to="/jewar-airport"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    Near Jewar Airport
                  </Link>
                  <Link
                    to="/government-approved"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    Government Approved
                  </Link>
                  <Link
                    to="/emi-options"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    Easy EMI Options
                  </Link>
                  <Link
                    to="/gated-community"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    Gated Community
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Search Box */}
          <div className="hidden lg:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Phone className="w-4 h-4 mr-2" />
                Enquire Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium"
              >
                About Us
              </Link>
              <Link
                to="/project"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium"
              >
                Our Project
              </Link>
              <Link
                to="/premium-plots"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium"
              >
                Premium Plots
              </Link>
              <Link
                to="/jewar-airport"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium pl-4"
              >
                Near Jewar Airport
              </Link>
              <Link
                to="/government-approved"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium pl-4"
              >
                Government Approved
              </Link>
              <Link
                to="/emi-options"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium pl-4"
              >
                Easy EMI Options
              </Link>
              <Link
                to="/gated-community"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium pl-4"
              >
                Gated Community
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-left font-medium"
              >
                Contact Us
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white w-full mt-4">
                  <Phone className="w-4 h-4 mr-2" />
                  Enquire Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;