
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
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
  Mail
} from "lucide-react";
import { LottieAnimation } from "../components/LottieAnimations";

const EnhancedAboutUs = () => {
  const milestones = [
    { year: "1988", event: "Company Founded", description: "Started with Residential Properties" },
    { year: "1998", event: "Commercial Entry", description: "Entered the commercial premises leasing sector" },
    { year: "2002", event: "Diversification", description: "Expanded portfolio with restaurants and showrooms" },
    { year: "2010", event: "Banking Partnerships", description: " Offered premises to leading Indian banks" },
    { year: "2018", event: "RERA Compliance", description: "Registered under RERA, strengthening compliance and credibility" },
    { year: "2020", event: " Global Expansion", description: "Expanded portfolio with multinational companies, international brands, and the IT sector" },
    { year: "2024", event: " 2M Milestone", description: "Achieved a milestone of leasing over 2 million sq. ft. of commercial space" }
  ];

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



  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gray-900 relative overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-yellow-primary rounded-full blur-3xl animate-float-massive"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-400 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* About Shetty Realtors - Enhanced with dramatic animations */}
        <div className="text-center mb-16 pt-8 sm:pt-12 md:pt-16">
          {/* Main Icon with multiple animation layers */}
          <div className="relative mb-8 animate-zoom-in-bounce" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-yellow-primary rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-yellow-primary/30 rounded-full animate-pulse"></div>
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-yellow-primary to-yellow-600 rounded-full flex items-center justify-center animate-glow-pulse-mega shadow-2xl">
              <Users className="w-16 h-16 text-white animate-bounce-gentle" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 animate-rotate-continuous">
              <LottieAnimation type="realEstate" className="w-full h-full" />
            </div>
            {/* Orbiting particles */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-primary rounded-full animate-orbit" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-blue-400 rounded-full animate-orbit" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-green-400 rounded-full animate-orbit" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-400 rounded-full animate-orbit" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
          
          {/* Enhanced title with letter animations - Mobile Responsive */}
          <div className="mb-6 overflow-visible">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white animate-slide-down-stagger leading-tight">
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '0.4s' }}>A</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '0.5s' }}>b</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '0.6s' }}>o</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '0.7s' }}>u</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '0.8s' }}>t</span>
              <span className="mx-1 sm:mx-2"></span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '0.9s' }}>S</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '1.0s' }}>h</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '1.1s' }}>e</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '1.2s' }}>t</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '1.3s' }}>t</span>
              <span className="inline-block animate-letter-pop" style={{ animationDelay: '1.4s' }}>y</span>
              <span className="mx-1 sm:mx-2"></span>
              <span className="inline-block text-yellow-primary animate-letter-pop-special" style={{ animationDelay: '1.5s' }}>R</span>
              <span className="inline-block text-yellow-primary animate-letter-pop-special" style={{ animationDelay: '1.6s' }}>e</span>
              <span className="inline-block text-yellow-primary animate-letter-pop-special" style={{ animationDelay: '1.7s' }}>a</span>
              <span className="inline-block text-yellow-primary animate-letter-pop-special" style={{ animationDelay: '1.8s' }}>l</span>
              <span className="inline-block text-yellow-primary animate-letter-pop-special" style={{ animationDelay: '1.9s' }}>t</span>
              <span className="inline-block text-yellow-primary animate-letter-pop-special" style={{ animationDelay: '2.0s' }}>o</span>
              <span className="inline-block text-yellow-primary animate-letter-pop-special" style={{ animationDelay: '2.1s' }}>r</span>
              <span className="inline-block text-yellow-primary animate-letter-pop-special" style={{ animationDelay: '2.2s' }}>s</span>
            </h2>
          </div>
          
          {/* Enhanced description - Mobile Responsive with Full Visibility */}
          <div className="relative px-2 sm:px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
              With 30+ years of experience, Shetty Realtors is Pune's trusted name in commercial property, office leasing, and co-working spaces. Having successfully leased over 20 lakh sq. ft., we specialize in delivering the right spaces for businesses to grow.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-primary/10 to-transparent animate-text-highlight" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>

        {/* Company Story - Enhanced */}
        <div className="mb-20">
          <Card className="professional-card hover-lift animate-slide-up-stagger max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-slate-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Story</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Established with a vision to transform Pune's commercial real estate landscape, Shetty Realtors has built a strong foundation rooted in professionalism, transparency, and deep market knowledge. From humble beginnings to becoming a key player in commercial leasing, our journey has been driven by long-term relationships and value creation.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We proudly serve a diverse clientele across banking, IT, retail, hospitality, and more. Our partnerships include Tata Elxsi, ARaymond, and leading nationalized and multinational banks. We've facilitated over 70+ branch setups for banks alone, creating lasting impact for both clients and property owners.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Our strong ties with top real estate builders in Pune allow us to offer premium commercial developments tailored to strategic business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    To provide transparent, value-driven commercial real estate solutions that help businesses thrive while fostering enduring relationships.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    To be Pune's most trusted partner for commercial real estate, known for integrity, expertise, and delivering end-to-end leasing and workspace solutions that enable long-term growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="animate-zoom-in-bounce" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-yellow-primary to-gray-900 bg-clip-text text-transparent animate-gradient-flow">
                  Our Achievements
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Milestones that showcase our expertise and success in commercial real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-2xl transition-all duration-500 animate-bounce-up-dramatic transform hover:scale-110 hover:-translate-y-2 group"
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="relative mx-auto mb-4">
                      <div className="absolute inset-0 w-16 h-16 bg-yellow-primary rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-primary to-yellow-600 rounded-full flex items-center justify-center animate-pulse-glow-enhanced shadow-xl">
                        <Icon className="w-8 h-8 text-white animate-bounce-icon" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 animate-rotate-slow">
                        <LottieAnimation type="success" className="w-full h-full" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-primary transition-colors duration-300">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-gray-900 via-yellow-primary to-gray-900 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h3>
            <div className="w-24 h-1 bg-yellow-primary mx-auto mt-4"></div>
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <Card className={`timeline-card hover-yellow-border w-80 ${index % 2 === 0 ? 'mr-4' : 'ml-4'} transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group`}>
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Card background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-slate-600 mr-2" />
                          <Badge className="bg-gradient-to-r from-slate-700 to-slate-600 text-white transform group-hover:scale-110 transition-transform duration-300">{milestone.year}</Badge>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-primary transition-colors duration-300">{milestone.event}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 transition-colors duration-300">{milestone.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative max-w-2xl mx-auto">
            {/* Mobile Timeline line */}
            <div className="absolute left-8 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex items-start"
                >
                  {/* Mobile Timeline dot */}
                  <div className="flex-shrink-0 w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-gray-900 mt-2 relative z-10"></div>
                  
                  {/* Mobile Card */}
                  <Card className="timeline-card hover-yellow-border ml-6 flex-1 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 group">
                    <CardContent className="p-4 relative overflow-hidden">
                      {/* Card background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-4 h-4 text-slate-600 mr-2" />
                          <Badge className="bg-gradient-to-r from-slate-700 to-slate-600 text-white text-xs transform group-hover:scale-110 transition-transform duration-300">{milestone.year}</Badge>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg group-hover:text-yellow-primary transition-colors duration-300">{milestone.event}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{milestone.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Enhanced Stats and Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white animate-scale-in-dramatic">
              <span className="bg-gradient-to-r from-gray-900 via-yellow-primary to-gray-900 bg-clip-text text-transparent animate-gradient-flow">
                Why Choose Shetty Realtors?
              </span>
            </h3>
            <div className="w-32 h-1 bg-yellow-primary mx-auto mt-4 animate-expand-width" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 animate-bounce-up-dramatic transform hover:scale-110 hover:-translate-y-3 group" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="absolute inset-0 w-16 h-16 bg-yellow-primary rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-primary to-orange-500 rounded-full flex items-center justify-center animate-pulse-glow-enhanced shadow-xl">
                    <Award className="w-8 h-8 text-white animate-bounce-icon" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 animate-rotate-slow">
                    <LottieAnimation type="success" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-primary transition-colors duration-300">30+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Decades of expertise in commercial real estate, helping businesses find their perfect space.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 animate-bounce-up-dramatic transform hover:scale-110 hover:-translate-y-3 group" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="absolute inset-0 w-16 h-16 bg-blue-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse-glow-enhanced shadow-xl">
                    <Users className="w-8 h-8 text-white animate-bounce-icon" style={{ animationDelay: '0.2s' }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 animate-rotate-slow" style={{ animationDelay: '0.2s' }}>
                    <LottieAnimation type="success" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">1000+ Happy Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Trusted by businesses of all sizes, from startups to multinational corporations.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 animate-bounce-up-dramatic transform hover:scale-110 hover:-translate-y-3 group" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center animate-pulse-glow-enhanced shadow-xl">
                    <Shield className="w-8 h-8 text-white animate-bounce-icon" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 animate-rotate-slow" style={{ animationDelay: '0.4s' }}>
                    <LottieAnimation type="success" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Premium Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Dedicated support throughout your real estate journey with personalized attention.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white animate-scale-in-dramatic" style={{ animationDelay: '0.8s' }}>
              <span className="bg-gradient-to-r from-gray-900 via-yellow-primary to-gray-900 bg-clip-text text-transparent animate-gradient-flow">
                Our Key Features
              </span>
            </h3>
            <div className="w-32 h-1 bg-yellow-primary mx-auto mt-4 animate-expand-width" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 animate-bounce-up-dramatic transform hover:scale-110 hover:-translate-y-3 group" style={{ animationDelay: '1.2s' }}>
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="absolute inset-0 w-16 h-16 bg-purple-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow-enhanced shadow-xl">
                    <Clock className="w-8 h-8 text-white animate-bounce-icon" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 animate-rotate-slow">
                    <LottieAnimation type="loading" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Round-the-clock assistance for all your real estate needs and emergencies.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 animate-bounce-up-dramatic transform hover:scale-110 hover:-translate-y-3 group" style={{ animationDelay: '1.4s' }}>
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="absolute inset-0 w-16 h-16 bg-pink-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center animate-pulse-glow-enhanced shadow-xl">
                    <MapPin className="w-8 h-8 text-white animate-bounce-icon" style={{ animationDelay: '0.2s' }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 animate-rotate-slow" style={{ animationDelay: '0.2s' }}>
                    <LottieAnimation type="house" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Deep knowledge of local markets and property trends across the region.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 animate-bounce-up-dramatic transform hover:scale-110 hover:-translate-y-3 group" style={{ animationDelay: '1.6s' }}>
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="absolute inset-0 w-16 h-16 bg-red-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center animate-pulse-glow-enhanced shadow-xl">
                    <Star className="w-8 h-8 text-white animate-bounce-icon" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 animate-rotate-slow" style={{ animationDelay: '0.4s' }}>
                    <LottieAnimation type="success" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Every property is carefully vetted to ensure it meets our high standards.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutUs;
