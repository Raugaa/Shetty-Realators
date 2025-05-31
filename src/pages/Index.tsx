
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Home, Contact, Building } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all duration-500">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-scale-in">
              Welcome to <span className="text-blue-600 dark:text-blue-400">Sudhir Realtors</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Your trusted partner in finding the perfect home. Experience excellence in real estate services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-scale">
                <Link to="/properties" className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  View Properties
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                <Link to="/contact" className="flex items-center gap-2">
                  <Contact className="w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
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
