
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* About Shetty Realtors */}
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Main Icon with Lottie Animation */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-yellow-primary rounded-full flex items-center justify-center animate-pulse-glow">
              <Users className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16">
              <LottieAnimation type="realEstate" className="w-full h-full" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Shetty <span className="text-yellow-primary">Realtors</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With 30+ years of experience, Shetty Realtors is Pune’s trusted name in commercial property, office leasing, and co-working spaces. Having successfully leased over 20 lakh sq. ft., we specialize in delivering the right spaces for businesses to grow.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <Card className="professional-card hover-lift animate-fade-in max-w-4xl mx-auto">
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

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-yellow-primary">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Milestones that showcase our expertise and success in commercial real estate
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

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Journey</h3>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 dark:bg-slate-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in animate-delay-${(index + 1) * 100}`}
                >
                  <Card className={`timeline-card hover-yellow-border w-80 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-slate-600 mr-2" />
                        <Badge className="bg-slate-700 text-white">{milestone.year}</Badge>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{milestone.event}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{milestone.description}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-700 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative max-w-2xl mx-auto">
            {/* Mobile Timeline line */}
            <div className="absolute left-8 top-0 w-0.5 h-full bg-slate-300 dark:bg-slate-600"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-start animate-fade-in animate-delay-${(index + 1) * 100}`}
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  {/* Mobile Timeline dot */}
                  <div className="flex-shrink-0 w-4 h-4 bg-slate-700 rounded-full border-4 border-white dark:border-gray-900 mt-2 relative z-10"></div>
                  
                  {/* Mobile Card */}
                  <Card className="timeline-card hover-yellow-border ml-6 flex-1">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-4 h-4 text-slate-600 mr-2" />
                        <Badge className="bg-slate-700 text-white text-xs">{milestone.year}</Badge>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{milestone.event}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Stats and Features Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why Choose Shetty Realtors?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left">
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-yellow-primary rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8">
                    <LottieAnimation type="success" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">30+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Decades of expertise in commercial real estate, helping businesses find their perfect space.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-yellow-primary rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8">
                    <LottieAnimation type="success" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">1000+ Happy Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Trusted by businesses of all sizes, from startups to multinational corporations.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-yellow-primary rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8">
                    <LottieAnimation type="success" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Premium Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dedicated support throughout your real estate journey with personalized attention.</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left">
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-yellow-primary rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8">
                    <LottieAnimation type="loading" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Round-the-clock assistance for all your real estate needs and emergencies.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-yellow-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8">
                    <LottieAnimation type="house" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Deep knowledge of local markets and property trends across the region.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-yellow-primary rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8">
                    <LottieAnimation type="success" className="w-full h-full" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Every property is carefully vetted to ensure it meets our high standards.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutUs;
