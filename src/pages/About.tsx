
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Sudhir Kumar",
      role: "Founder & CEO",
      experience: "15+ years",
      specialization: "Luxury Properties",
      description: "Leading the company with vision and expertise in premium real estate."
    },
    {
      name: "Priya Sharma",
      role: "Senior Sales Manager",
      experience: "10+ years",
      specialization: "Residential Sales",
      description: "Expert in residential properties with a focus on family homes."
    },
    {
      name: "Raj Patel",
      role: "Property Consultant",
      experience: "8+ years",
      specialization: "Commercial Properties",
      description: "Specializing in commercial real estate and investment properties."
    }
  ];

  // Partner company images
  const partnerImages = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop&crop=center"
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen transition-all duration-500">
        <Navigation />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Shetty Realtors
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                With over 30 years of experience in Pune's dynamic real estate market, Shetty Realtors has become a trusted name in commercial property transactions, corporate office leasing, and co-working space solutions. Our expertise has shaped the city's commercial growth, with over 10 lakh sq. ft. of rental space successfully leased across Pune.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="hover-scale bg-white/50 backdrop-blur-sm border-gray-200 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To provide transparent, value-driven commercial real estate solutions that help businesses thrive while fostering enduring relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale bg-white/50 backdrop-blur-sm border-gray-200 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To be Pune's most trusted partner for commercial real estate, known for integrity, expertise, and delivering end-to-end leasing and workspace solutions that enable long-term growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Company Story */}
            <Card className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-0 animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Established with a vision to transform Pune's commercial real estate landscape, Shetty Realtors has built a strong foundation rooted in professionalism, transparency, and deep market knowledge. From humble beginnings to becoming a key player in commercial leasing, our journey has been driven by long-term relationships and value creation.
                  </p>
                  <p>
                    We proudly serve a diverse clientele across banking, IT, retail, hospitality, and more. Our partnerships include Tata Elxsi, ARaymond, and leading nationalized and multinational banks. We've facilitated over 70+ branch setups for banks alone, creating lasting impact for both clients and property owners.
                  </p>
                  <p>
                    Our strong ties with top real estate builders in Pune allow us to offer premium commercial developments tailored to strategic business needs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Years Experience</h3>
                    <p className="text-gray-600">
                      Three decades of expertise in Pune's commercial real estate market
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-600 mb-2">10L+</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sq. Ft. Leased</h3>
                    <p className="text-gray-600">
                      Successfully leased over 10 lakh square feet of commercial space
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">70+</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank Branches</h3>
                    <p className="text-gray-600">
                      Facilitated setups for leading banks and financial institutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="hover-scale bg-white/50 backdrop-blur-sm border-gray-200 text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {member.name}
                      </CardTitle>
                      <CardDescription>
                        <Badge variant="outline" className="mb-2">{member.role}</Badge>
                        <div className="text-sm text-gray-600">
                          {member.experience} • {member.specialization}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Our Partners - Infinite Image Scroller */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Trusted Partners
              </h2>
              <div className="relative overflow-hidden w-full bg-white rounded-lg py-8 shadow-lg">
                <div className="flex animate-scroll-infinite">
                  {/* First set of images */}
                  {partnerImages.map((image, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 mx-4 partner-image-container"
                    >
                      <img
                        src={image}
                        alt={`Partner ${index + 1}`}
                        className="w-72 h-48 object-cover rounded-lg shadow-md partner-image"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {partnerImages.map((image, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 mx-4 partner-image-container"
                    >
                      <img
                        src={image}
                        alt={`Partner ${index + 1}`}
                        className="w-72 h-48 object-cover rounded-lg shadow-md partner-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center">
              <Button variant="outline" asChild className="hover-scale">
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
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
