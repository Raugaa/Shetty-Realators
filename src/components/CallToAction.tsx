
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Building, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dreamPropertyImage from "../images/Dream_Property.webp";

const CallToAction = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Mobile-Optimized Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{
          backgroundImage: `url(${dreamPropertyImage})`,
          filter: 'brightness(0.4) contrast(1.1)',
          backgroundPosition: 'center center',
          backgroundAttachment: 'scroll' // Better for mobile performance
        }}
      ></div>
      
      {/* Gradient Overlays for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30"></div>
      
      {/* Mobile-Responsive Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-primary/20 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-24 h-24 sm:w-48 sm:h-48 bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-black/40 backdrop-blur-lg border-yellow-primary/30 text-white overflow-hidden relative shadow-2xl animate-scale-in-dramatic mx-auto">
          <CardContent className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Mobile-Responsive Enhanced Title */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-center mb-3 sm:mb-4 animate-bounce-in flex-wrap" style={{ animationDelay: '0.2s' }}>
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-primary mr-2 sm:mr-3 animate-spin-slow" />
                <span className="text-yellow-primary font-semibold text-sm sm:text-base lg:text-lg tracking-wider text-center">PREMIUM REAL ESTATE</span>
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-primary ml-2 sm:ml-3 animate-spin-slow" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                <span className="inline-block animate-slide-up-stagger" style={{ animationDelay: '0.4s' }}>Ready</span>
                <span className="inline-block animate-slide-up-stagger mx-2 sm:mx-3" style={{ animationDelay: '0.5s' }}>to</span>
                <span className="inline-block animate-slide-up-stagger" style={{ animationDelay: '0.6s' }}>Find</span>
                <span className="inline-block animate-slide-up-stagger mx-2 sm:mx-3" style={{ animationDelay: '0.7s' }}>Your</span>
                <br className="block sm:hidden" />
                <span className="inline-block bg-gradient-to-r from-yellow-primary to-orange-400 bg-clip-text text-transparent animate-slide-up-stagger" style={{ animationDelay: '0.8s' }}>Dream</span>
                <span className="inline-block bg-gradient-to-r from-yellow-primary to-orange-400 bg-clip-text text-transparent animate-slide-up-stagger mx-2 sm:mx-3" style={{ animationDelay: '0.9s' }}>Property?</span>
              </h2>
            </div>
            
            {/* Mobile-Responsive Enhanced Description */}
            <div className="relative mb-8 sm:mb-12">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-4xl mx-auto text-white/95 leading-relaxed animate-typing-reveal px-2 sm:px-0" style={{ animationDelay: '1.2s' }}>
                Let our expert team guide you through India's best real estate opportunities. 
                From luxury apartments to commercial spaces, we have something for everyone.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-primary/10 to-transparent animate-text-highlight" style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            {/* Mobile-Responsive Enhanced Action Buttons */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row justify-center items-center animate-bounce-up-dramatic" style={{ animationDelay: '1.8s' }}>
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-yellow-primary to-orange-400 hover:from-yellow-400 hover:to-orange-500 text-black hover:text-black px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl border-none shadow-2xl transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2">
                <Link to="/properties" className="flex items-center gap-3 sm:gap-4 relative z-10 justify-center">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-bounce flex-shrink-0" />
                  <span className="relative">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Browse Properties</span>
                    <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">🏢 Explore Premium Spaces!</span>
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                </Link>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-primary/50 to-orange-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </Button>
              
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-yellow-primary/70 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2">
                <Link to="/contact" className="flex items-center gap-3 sm:gap-4 relative z-10 justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-pulse flex-shrink-0" />
                  <span className="relative">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Contact Our Experts</span>
                    <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">💬 Get Expert Advice!</span>
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                </Link>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-yellow-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </Button>
            </div>
            
            {/* Mobile-Responsive Trust Indicators */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '2.2s' }}>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-primary mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-xs sm:text-sm text-white/80">Properties Leased</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-primary mb-1 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-xs sm:text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-primary mb-1 group-hover:scale-110 transition-transform duration-300">30+</div>
                <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </CardContent>
          
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-primary/30 via-transparent to-blue-500/30 animate-gradient-shift"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-primary to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-primary to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </Card>
      </div>
      
      {/* Mobile-Responsive Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70" style={{ marginLeft: '-50px' }}>
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
