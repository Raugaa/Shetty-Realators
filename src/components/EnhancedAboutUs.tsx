
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Building, 
  Calendar,
  Star,
  Shield,
  Target
} from "lucide-react";

const EnhancedAboutUs = () => {
  const milestones = [
    { year: "1994", event: "Company Founded", description: "Started with a vision to transform Pune's commercial real estate landscape" },
    { year: "2000", event: "First Major Bank Partnership", description: "Secured our first major banking client relationship" },
    { year: "2005", event: "IT Sector Expansion", description: "Expanded operations to serve Pune's growing IT industry" },
    { year: "2015", event: "10 Lakh Sq. Ft. Milestone", description: "Successfully leased over 10 lakh sq. ft. of commercial space" },
    { year: "2024", event: "70+ Bank Branches", description: "Facilitated setups for over 70 bank branches across Pune" }
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

  const policies = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our commercial dealings and building long-term business relationships."
    },
    {
      icon: Users,
      title: "Client Success First",
      description: "Our clients' business growth is our priority. We deliver value-driven solutions that exceed expectations."
    },
    {
      icon: Star,
      title: "Market Excellence",
      description: "We strive for excellence in commercial real estate, from property selection to lease execution and support."
    },
    {
      icon: Award,
      title: "Expert Commercial Team",
      description: "Our team consists of experienced professionals who understand Pune's commercial real estate market inside out."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* About Shetty Realtors */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="professional-text">Shetty Realtors</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With over 30 years of experience in Pune's dynamic real estate market, Shetty Realtors has become a trusted name in commercial property transactions, corporate office leasing, and co-working space solutions. Our expertise has shaped the city's commercial growth, with over 10 lakh sq. ft. of rental space successfully leased across Pune.
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
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className={`professional-card hover-lift animate-fade-in animate-delay-${(index + 1) * 100} text-center`}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{achievement.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Journey</h3>
          <div className="relative max-w-4xl mx-auto">
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
        </div>

        {/* Why Choose Us - Policies Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose <span className="professional-text">Shetty Realtors</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core values and principles that make us Pune's most trusted commercial real estate partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <Card 
                  key={policy.title} 
                  className={`professional-card hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{policy.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{policy.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutUs;
