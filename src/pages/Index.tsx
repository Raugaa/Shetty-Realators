
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Contact, Building, Calendar, Home, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import EnhancedAboutUs from "@/components/EnhancedAboutUs";
import { HeroAnimation, FloatingAnimation, LottieAnimation } from "../components/LottieAnimations";


const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Typewriter animation
  useEffect(() => {
    const text = "Shetty Realtors";
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
      }, 150); // Slower typing speed for better visibility

      return () => clearInterval(typewriterInterval);
    }, 1000); // Start sooner

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

  const handleExploreClick = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <LoadingBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-yellow-primary flex items-center justify-center overflow-hidden">
        {/* Background Animations */}
        <HeroAnimation />
        <FloatingAnimation />
        
        <div className="relative z-10 text-center px-4">
          {/* Logo with pulse glow animation */}
          <div className="mb-8 animate-pulse-glow">
            <img 
              src="/public/lovable-uploads/52d0ead8-fce0-4e43-9b59-8105eea822a8.png" 
              alt="Shetty Realtors" 
              className="w-[600px] h-[120px] mx-auto object-contain"
            />
          </div>

          {/* Welcome Text */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Welcome to
          </h1>
          <h2 className="text-7xl md:text-9xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Shetty Realtors
          </h2>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Connecting Businesses with the Right Space
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg">
              <Link to="/properties">
                <Building className="w-6 h-6 mr-2" />
                Explore Properties
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg">
              <Link to="/contact">
                <Calendar className="w-6 h-6 mr-2" />
                Get Expert Consultation
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator with Lottie */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative">
            <ChevronDown className="w-12 h-12 text-dark-gray/70" />
            <div className="absolute -top-4 -right-4 w-8 h-8">
              <LottieAnimation type="loading" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in-up">
            Our Success Story
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-in-left">
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto bg-yellow-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <Home className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12">
                  <LottieAnimation type="success" className="w-full h-full" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Properties Leased</p>
            </div>
            
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto bg-yellow-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12">
                  <LottieAnimation type="success" className="w-full h-full" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            
            <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto bg-yellow-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12">
                  <LottieAnimation type="success" className="w-full h-full" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">30+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            
            <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto bg-yellow-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12">
                  <LottieAnimation type="success" className="w-full h-full" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10L+</h3>
              <p className="text-gray-600">Sq. Ft. Leased</p>
            </div>
          </div>
        </div>
      </section>

      <EnhancedAboutUs />
      
      {/* Add proper spacing and visual separation before CallToAction */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white border-t border-yellow-primary/20">
        <CallToAction />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
