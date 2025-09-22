
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
import logo from "../images/Logo.png";


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
      
      {/* Mobile-Optimized Hero Section */}
      <section className="relative min-h-screen bg-yellow-primary flex items-start justify-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
        {/* Background Animations */}
        <HeroAnimation />
        <FloatingAnimation />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-6rem)]">
          {/* Mobile-Responsive Logo */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto rounded-full overflow-hidden animate-glow-pulse">
            <img
              src={logo}
              alt="Shetty Realtors"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile-Responsive Company Name */}
          <div className="mb-3 sm:mb-4 overflow-hidden">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 animate-slide-down-dramatic leading-tight" style={{ animationDelay: '0.3s' }}>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.4s' }}>S</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.5s' }}>H</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.6s' }}>E</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.7s' }}>T</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.8s' }}>T</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.9s' }}>Y</span>
              <span className="mx-2 sm:mx-4"></span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '1.0s' }}>R</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '1.1s' }}>E</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '1.2s' }}>A</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '1.3s' }}>L</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '1.4s' }}>T</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '1.5s' }}>O</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '1.6s' }}>R</span>
              <span className="inline-block animate-letter-bounce" style={{ animationDelay: '1.7s' }}>S</span>
            </h2>
          </div>
          
          {/* Mobile-Responsive Tagline */}
          <div className="relative mb-6 sm:mb-8 animate-fade-in-up px-2" style={{ animationDelay: '2.0s' }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 typewriter-container leading-relaxed">
              <span className="typewriter-text animate-typing" style={{ animationDelay: '2.2s' }}>
                Connecting Businesses with the Right Space
              </span>
              <span className="typewriter-cursor animate-blink">|</span>
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-primary/20 to-transparent animate-highlight-sweep" style={{ animationDelay: '2.5s' }}></div>
          </div>

          {/* Mobile-Responsive CTA Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row justify-center items-center animate-bounce-in-stagger px-2 mb-16 sm:mb-20" style={{ animationDelay: '3.0s' }}>
            <Button asChild size="lg" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-yellow-primary/30 animate-pulse-subtle group">
              <Link to="/properties">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:animate-bounce" />
                <span className="relative overflow-hidden">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">Explore Properties</span>
                  <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">🏢 Find Your Space!</span>
                </span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-yellow-primary/30 animate-float-gentle group" style={{ animationDelay: '3.2s' }}>
              <Link to="/contact">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:animate-spin" />
                <span className="relative overflow-hidden">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">Get Expert Consultation</span>
                  <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">💬 Let's Talk!</span>
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile-Responsive Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-gentle" style={{ animationDelay: '3.5s' }}>
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-yellow-primary rounded-full opacity-20 animate-ping"></div>
            <div className="relative z-10 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full border border-yellow-primary/30 group-hover:bg-yellow-primary/20 transition-all duration-300">
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 group-hover:text-yellow-primary animate-bounce-slow" />
            </div>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6">
              <LottieAnimation type="loading" className="w-full h-full opacity-70" />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 animate-fade-in text-center ml-[-15px]" style={{ animationDelay: '4s' }}>Scroll to explore</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-primary rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-primary/30 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section title */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 relative">
                <span className="bg-gradient-to-r from-gray-900 via-yellow-primary to-gray-900 bg-clip-text text-transparent">
                  Our Success Story
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-primary"></div>
              </h2>
            </div>
            <p className="text-xl text-gray-600 mt-6">
              Three decades of excellence in real estate
            </p>
          </div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-yellow-primary to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Home className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16">
                  <LottieAnimation type="success" className="w-full h-full" />
                </div>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-4xl font-bold text-gray-900 mb-2" data-target="500">500+</h3>
              </div>
              <p className="text-gray-600 font-medium">Properties Leased</p>
              <div className="w-16 h-1 bg-yellow-primary mx-auto mt-3"></div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Users className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16">
                  <LottieAnimation type="success" className="w-full h-full" />
                </div>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-4xl font-bold text-gray-900 mb-2" data-target="1000">1000+</h3>
              </div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
              <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Award className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16">
                  <LottieAnimation type="success" className="w-full h-full" />
                </div>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-4xl font-bold text-gray-900 mb-2" data-target="30">30+</h3>
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
              <div className="w-16 h-1 bg-green-500 mx-auto mt-3"></div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <TrendingUp className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16">
                  <LottieAnimation type="success" className="w-full h-full" />
                </div>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-4xl font-bold text-gray-900 mb-2" data-target="10">20L+</h3>
              </div>
              <p className="text-gray-600 font-medium">Sq. Ft. Leased</p>
              <div className="w-16 h-1 bg-purple-500 mx-auto mt-3"></div>
            </div>
          </div>
          
          {/* Success story description */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-primary/20">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey of <span className="font-bold text-yellow-primary">three decades</span> has been marked by 
                <span className="font-semibold"> unwavering commitment</span> to excellence, 
                <span className="font-semibold"> innovative solutions</span>, and 
                <span className="font-semibold"> lasting partnerships</span> that have shaped Pune's commercial landscape.
              </p>
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
