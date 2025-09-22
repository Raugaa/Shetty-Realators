
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Building, User, Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/Logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Properties", path: "/properties", icon: Building },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-yellow-primary/20 transition-all duration-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-3 hover-scale group">
            <div className="relative">
              <img 
                src={logo} 
                alt="Shetty Realtors" 
                className="w-16 h-16 sm:w-14 sm:h-14 rounded-full group-hover:shadow-lg transition-all duration-300 object-contain"
              />
            </div>
            <div className="hidden xs:block">
              <span className="text-lg sm:text-xl font-bold text-dark-gray group-hover:text-yellow-primary transition-colors duration-300">
                Shetty Realtors
              </span>
              <p className="text-xs sm:text-sm text-dark-gray/70">Premium Real Estate</p>
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
                      ? "bg-yellow-primary/20 text-yellow-primary shadow-lg"
                      : "text-dark-gray/80 hover:bg-yellow-primary/10 hover:text-yellow-primary"
                  }`}>
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </Link>
              );
            })}
            

          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-dark-gray hover:bg-yellow-primary/10 hover:text-yellow-primary p-3 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 mx-2 border border-yellow-primary/20 shadow-lg">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-xl mb-3 transition-all duration-300 animate-slide-in ${
                      isActive
                        ? "bg-yellow-primary/20 text-yellow-primary"
                        : "text-dark-gray/80 hover:bg-yellow-primary/10 hover:text-yellow-primary"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
