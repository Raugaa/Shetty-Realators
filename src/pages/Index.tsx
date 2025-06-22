
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, Award, Star, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import AboutPreview from "@/components/AboutPreview";
import StatsSection from "@/components/StatsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  const features = [
    {
      icon: Building,
      title: "Commercial Properties",
      description: "Premium office spaces, retail outlets, and commercial complexes across Pune"
    },
    {
      icon: Users,
      title: "Corporate Leasing",
      description: "Specialized solutions for IT companies, banks, and multinational corporations"
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades of expertise in Pune's commercial real estate market"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "IT Director, Tech Solutions",
      content: "Shetty Realtors helped us find the perfect office space for our expanding team. Their expertise in commercial leasing is unmatched.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Branch Manager, National Bank",
      content: "Professional service and deep market knowledge. They've helped us establish multiple branches across Pune efficiently.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Business Owner",
      content: "From search to lease signing, the entire process was smooth and transparent. Highly recommended for commercial properties.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <LoadingBar />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all duration-700">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Connecting Businesses with the{" "}
                <span className="text-yellow-primary">Right Space</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                Premier commercial real estate solutions in Pune. With 30+ years of expertise, we specialize in office leasing, retail spaces, and corporate relocations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild className="bg-yellow-primary hover:bg-yellow-primary/90 text-black font-semibold px-8 py-4 rounded-xl">
                  <Link to="/properties" className="flex items-center gap-2">
                    Explore Properties
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-gray-300 dark:border-gray-600 px-8 py-4 rounded-xl">
                  <Link to="/contact">
                    Get Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose <span className="text-yellow-primary">Shetty Realtors</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Leading commercial real estate expertise with a proven track record of successful partnerships
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in animate-delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-yellow-primary/10 rounded-xl mb-6">
                    <feature.icon className="w-8 h-8 text-yellow-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* About Preview */}
        <AboutPreview />

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Client <span className="text-yellow-primary">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Hear from businesses we've helped find their perfect commercial space
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animate-delay-${(index + 1) * 200}`}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
