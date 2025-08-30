
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowDown, 
  ArrowUp, 
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
                About <span className="text-yellow-primary">Sudhir Kumar</span>
              </h1>
              <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
                Founder & CEO of Shetty Realtors with over 30 years of experience in Pune's dynamic real estate market. 
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
                      <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-primary to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-xl">
                        <span className="text-6xl font-bold text-white">
                          SK
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Sudhir Kumar
                      </h2>
                      <p className="text-xl text-yellow-primary font-semibold mb-4">
                        Founder & CEO
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
                        <span className="text-gray-600 dark:text-gray-300">Shetty Realtors</span>
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
                        Established with a vision to transform Pune's commercial real estate landscape, I have built Shetty Realtors 
                        on a strong foundation rooted in professionalism, transparency, and deep market knowledge.
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

            {/* Contact CTA */}
            <div className="text-center mb-16">
              <Card className="professional-card hover-lift bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-2 border-yellow-primary/20 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Work Together?</h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Let's discuss your commercial real estate needs and find the perfect solution for your business.
                  </p>
                  <Button asChild size="lg" className="bg-yellow-primary hover:bg-yellow-primary/90 text-black">
                    <Link to="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Get in Touch
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

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
