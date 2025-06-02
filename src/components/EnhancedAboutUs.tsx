
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Building, 
  MapPin, 
  Calendar,
  TrendingUp,
  Star,
  Shield,
  Target
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const EnhancedAboutUs = () => {
  const stats = [
    { name: "Mumbai", properties: 45, color: "#475569" },
    { name: "Pune", properties: 32, color: "#64748b" },
    { name: "Delhi", properties: 28, color: "#94a3b8" },
    { name: "Bangalore", properties: 25, color: "#cbd5e1" }
  ];

  const yearlyData = [
    { year: "2020", sales: 45 },
    { year: "2021", sales: 62 },
    { year: "2022", sales: 78 },
    { year: "2023", sales: 95 },
    { year: "2024", sales: 130 }
  ];

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Story */}
          <div className="space-y-8">
            <Card className="professional-card hover-lift animate-fade-in">
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
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Today, we pride ourselves on our deep understanding of local markets, 
                  commitment to legal compliance, and personalized service that treats every 
                  client like family.
                </p>
              </CardContent>
            </Card>

            {/* Mission & Vision */}
            <Card className="professional-card hover-lift animate-fade-in animate-delay-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-slate-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mission & Vision</h3>
                </div>
                <div className="space-y-4">
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

          {/* Charts */}
          <div className="space-y-8">
            {/* Properties by City Chart */}
            <Card className="professional-card hover-lift animate-fade-in animate-delay-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-slate-600" />
                  Properties by City
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={stats}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="properties"
                    >
                      {stats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: stat.color }}
                      ></div>
                      <span className="text-gray-600 dark:text-gray-300">{stat.name}: {stat.properties}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Yearly Sales Chart */}
            <Card className="professional-card hover-lift animate-fade-in animate-delay-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-slate-600" />
                  Sales Growth
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#475569" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
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

        {/* Achievements */}
        <div>
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
      </div>
    </section>
  );
};

export default EnhancedAboutUs;
