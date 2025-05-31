
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Home, Contact, Building, ChevronDown, Shield, Users, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import StatsSection from "@/components/StatsSection";
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
                className="w-48 h-24 mx-auto mb-8 hover-scale object-contain"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-scale-in">
              Welcome to <span className="professional-text">Sudhir Realtors</span>
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

        <StatsSection />

        {/* Enhanced About Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="professional-text">Sudhir Realtors</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Leading the Indian real estate market with expertise, integrity, and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                  alt="Indian Real Estate" 
                  className="w-full h-96 object-cover rounded-2xl shadow-xl hover-scale"
                />
              </div>
              <div className="animate-fade-in animate-delay-200">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  15+ Years of Excellence in Indian Real Estate
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Established in 2008, Sudhir Realtors has been at the forefront of India's real estate revolution. 
                  From Mumbai's skyline to Delhi's commercial hubs, from Bangalore's IT corridors to Chennai's 
                  residential complexes, we have facilitated thousands of property transactions across major Indian cities.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Our deep understanding of local markets, regulatory compliance, and cultural nuances makes us 
                  the preferred choice for both domestic and NRI clients looking to invest in Indian real estate.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">2500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Happy Families</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Cities Covered</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in animate-delay-300 order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Serving Every Corner of India
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  From luxury apartments in South Mumbai to affordable housing in Tier-2 cities, 
                  from commercial spaces in Gurgaon to villa projects in Goa, our portfolio spans 
                  every segment of the Indian real estate market.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  We specialize in residential, commercial, and industrial properties, offering 
                  end-to-end services including legal documentation, home loans, and post-sales support.
                </p>
                <Button asChild className="hover-scale professional-btn">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More About Our Journey
                    <ArrowDown className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="animate-fade-in animate-delay-400 order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
                  alt="Indian Architecture" 
                  className="w-full h-96 object-cover rounded-2xl shadow-xl hover-scale"
                />
              </div>
            </div>
          </div>
        </section>

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
