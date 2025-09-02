
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowDown, 
  ArrowUp, 
  ArrowRight,
  Home, 
  Award, 
  Users, 
  Building, 
  Calendar,
  Star,
  Shield,
  Target,
  Clock,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";
import { Link } from "react-router-dom";
import dreamPropertyImage from "../images/Dream_Property.webp";
import CEO_Photo from "../images/CEO_Photo.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import { LottieAnimation } from "@/components/LottieAnimations";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades of expertise in Pune's commercial market"
    },
    {
      icon: Star,
      title: "10L+ Sq. Ft. Leased",
      description: "Successfully leased over 10 lakh sq. ft. of space"
    },
    {
      icon: Shield,
      title: "70+ Bank Branches",
      description: "Facilitated setups for leading financial institutions"
    },
    {
      icon: Target,
      title: "Premium Partnerships",
      description: "Trusted by Tata Elxsi, ARaymond, and top banks"
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Complete transparency in all commercial dealings and building long-term business relationships."
    },
    {
      icon: Users,
      title: "Client Success First",
      description: "Client business growth is the priority. Delivering value-driven solutions that exceed expectations."
    },
    {
      icon: Star,
      title: "Market Excellence",
      description: "Striving for excellence in commercial real estate, from property selection to lease execution."
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Deep understanding of Pune's commercial real estate market inside out."
    }
  ];

  return (
    <div className="min-h-screen">
      <LoadingBar />
      <div className="professional-bg min-h-screen transition-all duration-700">
        <Navigation />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-yellow-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16">
                  <LottieAnimation type="realEstate" className="w-full h-full" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                About <span className="text-yellow-primary">Sudhir Shetty</span>
              </h1>
              <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
                Founder & Director of Shetty Realtors with over 30 years of experience in Pune's dynamic real estate market. 
                A trusted name in commercial property transactions, corporate office leasing, and co-working space solutions.
              </p>
            </div>

            {/* Personal Profile Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Profile Image & Info */}
              <div className="animate-fade-in-up">
                <Card className="professional-card hover-lift bg-white/95 dark:bg-gray-800/95 backdrop-blur-md">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-48 h-48 mx-auto rounded-full mb-6 shadow-xl overflow-hidden border-4 border-yellow-primary/20">
                        <img 
                          src={CEO_Photo} 
                          alt="Sudhir Shetty - Founder & Director" 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Sudhir Shetty 
                      </h2>
                      <p className="text-xl text-yellow-primary font-semibold mb-4">
                        Founder & Director
                      </p>
                      <div className="flex justify-center space-x-4">
                        <Badge className="bg-dark-gray text-white">30+ Years Experience</Badge>
                        <Badge className="bg-yellow-primary text-black">Commercial Expert</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-yellow-primary" />
                        <span className="text-gray-600 dark:text-gray-300">Pune, Maharashtra</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Building className="w-5 h-5 text-yellow-primary" />
                        <span className="text-gray-600 dark:text-gray-300"> Founder & Director of Shetty Realtors</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-yellow-primary" />
                        <span className="text-gray-600 dark:text-gray-300">Commercial Real Estate Specialist</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Personal Story */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Card className="professional-card hover-lift bg-white/95 dark:bg-gray-800/95 backdrop-blur-md h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Building className="w-6 h-6 text-yellow-primary mr-3" />
                      My Story
                    </h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        Sudhir Shetty, Founder & Director of Shetty Realtors, is a seasoned real estate professional with over three decades of experience in Pune’s commercial property market. Under his leadership, Shetty Realtors has successfully leased more than 20 lakh sq. ft. of office and co-working spaces, building long-standing relationships with corporates and business owners alike. His commitment to transparency, client satisfaction, and market excellence has made him a trusted name in the industry.
                      </p>
                      <p>
                        From humble beginnings to becoming a key player in commercial leasing, my journey has been driven by 
                        long-term relationships and value creation. We proudly serve a diverse clientele across banking, IT, 
                        retail, hospitality, and more.
                      </p>
                      <p>
                        Our partnerships include Tata Elxsi, ARaymond, and leading nationalized and multinational banks. 
                        We've facilitated over 70+ branch setups for banks alone, creating lasting impact for both clients 
                        and property owners.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <Card className="professional-card hover-lift bg-white/95 dark:bg-gray-800/95 backdrop-blur-md animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <Target className="w-6 h-6 text-yellow-primary mr-3" />
                    My Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To provide transparent, value-driven commercial real estate solutions that help businesses thrive while 
                    fostering enduring relationships. Every client's success is my personal commitment.
                  </p>
                </CardContent>
              </Card>

              <Card className="professional-card hover-lift bg-white/95 dark:bg-gray-800/95 backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <Star className="w-6 h-6 text-yellow-primary mr-3" />
                    My Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To be Pune's most trusted partner for commercial real estate, known for integrity, expertise, and 
                    delivering end-to-end leasing and workspace solutions that enable long-term growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div className="mb-20">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  My <span className="text-yellow-primary">Achievements</span>
                </h2>
                <p className="text-xl text-black max-w-3xl mx-auto">
                  Milestones that showcase my expertise and success in commercial real estate
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left animate-delay-${(index + 1) * 100}`}
                      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="relative mx-auto mb-4">
                          <div className="w-16 h-16 bg-yellow-primary rounded-full flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8">
                            <LottieAnimation type="success" className="w-full h-full" />
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">{achievement.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-20">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  My <span className="text-yellow-primary">Core Values</span>
                </h2>
                <p className="text-xl text-black max-w-3xl mx-auto">
                  The principles that guide my approach to commercial real estate
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left animate-delay-${(index + 1) * 100}`}
                      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="relative mx-auto mb-4">
                          <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8">
                            <LottieAnimation type="success" className="w-full h-full" />
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{value.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Contact CTA with Background Image */}
            <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden mb-16 rounded-3xl">
              {/* Mobile-Optimized Background Image with Parallax Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom rounded-3xl"
                style={{
                  backgroundImage: `url(${dreamPropertyImage})`,
                  filter: 'brightness(0.8) contrast(1.1) saturate(1.1)',
                  backgroundPosition: 'center center',
                  backgroundAttachment: 'scroll'
                }}
              ></div>
              
              {/* Subtle Text Readability Enhancement */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 rounded-3xl"></div>
              
              {/* Mobile-Responsive Animated Floating Elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-primary/20 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-4 sm:right-10 w-24 h-24 sm:w-48 sm:h-48 bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"></div>
              </div>
              
              <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-scale-in-dramatic">
                  {/* Enhanced Title with Text Shadow for Readability */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center mb-4 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                      <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-primary mr-3 animate-spin-slow drop-shadow-lg" />
                      <span className="text-yellow-primary font-semibold text-sm sm:text-base lg:text-lg tracking-wider drop-shadow-lg">PREMIUM PARTNERSHIP</span>
                      <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-primary ml-3 animate-spin-slow drop-shadow-lg" />
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      <span className="inline-block animate-slide-up-stagger text-white drop-shadow-2xl" style={{ animationDelay: '0.4s', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Ready</span>
                      <span className="inline-block animate-slide-up-stagger mx-2 sm:mx-3 text-white drop-shadow-2xl" style={{ animationDelay: '0.5s', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>to</span>
                      <span className="inline-block animate-slide-up-stagger text-white drop-shadow-2xl" style={{ animationDelay: '0.6s', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Work</span>
                      <br className="block sm:hidden" />
                      <span className="inline-block bg-gradient-to-r from-yellow-primary to-orange-400 bg-clip-text text-transparent animate-slide-up-stagger mx-2 sm:mx-3 drop-shadow-2xl" style={{ animationDelay: '0.7s', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))' }}>Together?</span>
                    </h3>
                  </div>
                  
                  {/* Enhanced Description with Background for Readability */}
                  <div className="relative mb-10">
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-6 py-4 mx-auto max-w-3xl">
                      <p className="text-lg sm:text-xl md:text-2xl mb-6 text-white leading-relaxed animate-typing-reveal" style={{ animationDelay: '1s' }}>
                        Let's discuss your commercial real estate needs and find the perfect solution for your business. 
                        Our expert team is ready to guide you to success.
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-primary/10 to-transparent animate-text-highlight rounded-2xl" style={{ animationDelay: '1.3s' }}></div>
                  </div>
                  
                  {/* Enhanced Action Button */}
                  <div className="flex justify-center animate-bounce-up-dramatic mb-12" style={{ animationDelay: '1.6s' }}>
                    <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-yellow-primary to-orange-400 hover:from-yellow-400 hover:to-orange-500 text-black hover:text-black px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-2xl border-none shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2">
                      <Link to="/contact" className="flex items-center gap-4 relative z-10">
                        <Phone className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce" />
                        <span>Get in Touch</span>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Trust Indicators with Background */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '2s' }}>
                    <div className="text-center group bg-black/30 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl sm:text-3xl font-bold text-yellow-primary mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">30+</div>
                      <div className="text-sm text-white drop-shadow-lg">Years Experience</div>
                    </div>
                    <div className="text-center group bg-black/30 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl sm:text-3xl font-bold text-yellow-primary mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">1000+</div>
                      <div className="text-sm text-white drop-shadow-lg">Happy Clients</div>
                    </div>
                    <div className="text-center group bg-black/30 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl sm:text-3xl font-bold text-yellow-primary mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">24/7</div>
                      <div className="text-sm text-white drop-shadow-lg">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center">
              <Button variant="outline" asChild className="hover-lift px-8 py-4 rounded-xl font-semibold bg-dark-gray hover:bg-dark-gray/90 text-white border-dark-gray">
                <Link to="/" className="flex items-center gap-3">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
