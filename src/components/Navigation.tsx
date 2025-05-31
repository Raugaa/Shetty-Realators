
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Building, User, Phone, Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navigation = ({ isDarkMode, toggleTheme }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Properties", path: "/properties", icon: Building },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-4 hover-scale group">
            <div className="relative">
              <img 
                src="/lovable-uploads/52d0ead8-fce0-4e43-9b59-8105eea822a8.png" 
                alt="Sudhir Realtors" 
                className="w-12 h-12 rounded-lg group-hover:shadow-lg transition-all duration-300 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                Sudhir Realtors
              </span>
              <p className="text-sm text-white/70">Premium Real Estate</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 hover-lift animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 text-white shadow-lg"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}>
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </Link>
              );
            })}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover-scale ml-4 text-white hover:bg-white/10 p-3 rounded-xl"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10 p-3 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 animate-fade-in">
            <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 m-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-xl mb-3 transition-all duration-300 animate-slide-in ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="w-full mt-4 text-white hover:bg-white/10 justify-start px-4 py-4 rounded-xl"
              >
                {isDarkMode ? <Sun className="w-5 h-5 mr-3" /> : <Moon className="w-5 h-5 mr-3" />}
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
