
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Home, Contact, Building, ChevronDown, Shield, Users, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import EnhancedAboutUs from "@/components/EnhancedAboutUs";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [showTypewriter, setShowTypewriter] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Typewriter animation
  useEffect(() => {
    const text = "Sudhir Realtors";
    let currentIndex = 0;
    let currentIteration = 0;
    const maxIterations = 2;

    const timer = setTimeout(() => {
      setShowTypewriter(true);
      
      const typewriterInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setTypewriterText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          // Pause for a moment, then clear and restart
          setTimeout(() => {
            setTypewriterText("");
            currentIndex = 0;
            currentIteration++;
            
            if (currentIteration >= maxIterations) {
              clearInterval(typewriterInterval);
              setTypewriterText(text); // Show final text
            }
          }, 1000);
        }
      }, 100);

      return () => clearInterval(typewriterInterval);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const policies = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our dealings and building long-term trust with our clients."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our clients' satisfaction is our top priority. We go above and beyond to exceed expectations."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from property selection to after-sales support."
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Our team consists of experienced professionals who understand the Indian real estate market inside out."
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <LoadingBar />
      <div className="professional-bg min-h-screen transition-all duration-700">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        {/* Hero Section */}
        <section className="hero-professional pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-gray-900/20"></div>
          <div className={`max-w-7xl mx-auto text-center relative z-10 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="animate-float">
              <img 
                src="/lovable-uploads/52d0ead8-fce0-4e43-9b59-8105eea822a8.png" 
                alt="Sudhir Realtors Logo" 
                className="w-80 h-40 mx-auto mb-8 hover-scale object-contain"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-scale-in">
              Welcome to <span className="professional-text">
                {showTypewriter ? typewriterText : "Sudhir Realtors"}
                {showTypewriter && typewriterText.length < "Sudhir Realtors".length && (
                  <span className="animate-pulse">|</span>
                )}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-fade-in animate-delay-200">
              Your Trusted Partner in Indian Real Estate - Discover Premium Properties Across India
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-400">
              <Button size="lg" className="hover-lift professional-btn bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Link to="/properties" className="flex items-center gap-3">
                  <Building className="w-6 h-6" />
                  Explore Properties
                </Link>
              </Button>
              <Button size="lg" className="hover-lift professional-btn bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Link to="/contact" className="flex items-center gap-3">
                  <Contact className="w-6 h-6" />
                  Get Expert Consultation
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </section>

        <EnhancedAboutUs />

        {/* Why Choose Us - Policies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose <span className="professional-text">Sudhir Realtors</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our core values and principles that make us India's most trusted real estate partner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {policies.map((policy, index) => {
                const Icon = policy.icon;
                return (
                  <Card 
                    key={policy.title} 
                    className={`professional-card hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{policy.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{policy.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
