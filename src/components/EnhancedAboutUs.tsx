
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
    { year: "2009", event: "Company Founded", description: "Started with a vision to transform real estate" },
    { year: "2012", event: "First 100 Properties", description: "Reached our first major milestone" },
    { year: "2016", event: "Multiple City Expansion", description: "Expanded operations to Mumbai, Pune, Delhi" },
    { year: "2020", event: "Digital Transformation", description: "Launched online property platform" },
    { year: "2024", event: "1000+ Happy Families", description: "Helped over 1000 families find their dream homes" }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Best Real Estate Company 2023",
      description: "Awarded by Maharashtra Real Estate Association"
    },
    {
      icon: Star,
      title: "4.9/5 Customer Rating",
      description: "Based on 500+ customer reviews"
    },
    {
      icon: Shield,
      title: "100% Legal Compliance",
      description: "All properties verified and RERA compliant"
    },
    {
      icon: Target,
      title: "Zero Hidden Costs",
      description: "Transparent pricing with no surprise charges"
    }
  ];

  const policies = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our dealings and building long-term trust with our clients."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our clients' satisfaction is our top priority. We go above and beyond to exceed expectations."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from property selection to after-sales support."
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Our team consists of experienced professionals who understand the Indian real estate market inside out."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* About Sudhir Realtors */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="professional-text">Sudhir Realtors</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With over 15 years of excellence in the real estate industry, we have been helping families 
            find their perfect homes across India. Our commitment to transparency, quality, and customer 
            satisfaction has made us one of the most trusted names in real estate.
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
                Founded in 2009 by Mr. Sudhir Shetty, our company began with a simple mission: 
                to make quality real estate accessible to every family in India. What started as 
                a small office in Pune has now grown into a trusted network spanning multiple cities.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Today, we pride ourselves on our deep understanding of local markets, 
                commitment to legal compliance, and personalized service that treats every 
                client like family.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    To provide transparent, reliable, and personalized real estate services 
                    that help families find their perfect homes while ensuring complete legal compliance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    To be India's most trusted real estate partner, known for integrity, 
                    innovation, and exceptional customer service.
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
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 dark:bg-slate-600"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in animate-delay-${(index + 1) * 100}`}
                >
                  <Card className={`professional-card hover-lift w-80 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
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
              Why Choose <span className="professional-text">Sudhir Realtors</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core values and principles that make us India's most trusted real estate partner
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
