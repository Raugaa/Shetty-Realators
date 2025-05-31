
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

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

  const achievements = [
    {
      year: "2023",
      title: "Top Real Estate Agency",
      organization: "City Real Estate Board"
    },
    {
      year: "2022",
      title: "Customer Excellence Award",
      organization: "National Realty Association"
    },
    {
      year: "2021",
      title: "Innovation in Real Estate",
      organization: "Industry Leaders Forum"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all duration-500">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Sudhir Realtors
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Building dreams, creating homes, and fostering communities for over a decade
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="hover-scale bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To provide exceptional real estate services that exceed our clients' expectations 
                    while maintaining the highest standards of integrity, professionalism, and customer care. 
                    We are committed to making the property buying and selling experience smooth, 
                    transparent, and rewarding for every client.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To be the most trusted and innovative real estate company in the region, 
                    known for our expertise, ethical practices, and commitment to building 
                    lasting relationships with our clients and communities. We envision a 
                    future where finding the perfect property is an enjoyable and fulfilling experience.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Company Story */}
            <Card className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-0 animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Our Story
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2009</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Founded</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Started with a vision to transform the real estate experience
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">2015</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expansion</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Expanded services to include commercial and luxury properties
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">2024</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Leading with technology and customer-centric solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="hover-scale bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {member.name}
                      </CardTitle>
                      <CardDescription>
                        <Badge variant="outline" className="mb-2">{member.role}</Badge>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {member.experience} • {member.specialization}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <Card className="mb-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                  Awards & Recognition
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  Our commitment to excellence has been recognized by industry leaders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg"
                    >
                      <Badge variant="default" className="text-lg px-3 py-1">
                        {achievement.year}
                      </Badge>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {achievement.organization}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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
