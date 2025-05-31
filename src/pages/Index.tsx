
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Home, Contact, Building, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <LoadingBar />
      <div className="animated-bg min-h-screen transition-all duration-700">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        {/* Hero Section */}
        <section className="hero-bg pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className={`max-w-7xl mx-auto text-center relative z-10 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="animate-float">
              <img 
                src="/lovable-uploads/52d0ead8-fce0-4e43-9b59-8105eea822a8.png" 
                alt="Sudhir Realtors Logo" 
                className="w-24 h-24 mx-auto mb-6 hover-scale"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-scale-in">
              Find Your <span className="gradient-text">Dream Home</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-fade-in animate-delay-200">
              Discover the perfect property with our premium real estate collection
            </p>
            
            {/* Search Bar */}
            <div className="max-w-5xl mx-auto mb-12 animate-fade-in animate-delay-300">
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search properties..."
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    />
                  </div>
                  <select className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300">
                    <option>All Types</option>
                    <option>Houses</option>
                    <option>Apartments</option>
                    <option>Condos</option>
                  </select>
                  <select className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300">
                    <option>All Prices</option>
                    <option>Under $500k</option>
                    <option>$500k - $1M</option>
                    <option>Over $1M</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-400">
              <Button size="lg" className="hover-lift hover-glow bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Link to="/properties" className="flex items-center gap-3">
                  <Building className="w-6 h-6" />
                  Browse Properties
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover-lift border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl">
                <Link to="/contact" className="flex items-center gap-3">
                  <Contact className="w-6 h-6" />
                  Get Expert Help
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </section>

        <StatsSection />
        <AboutPreview />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
