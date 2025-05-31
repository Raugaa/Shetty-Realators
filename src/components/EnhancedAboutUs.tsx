
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Building, Users, Award, Target, TrendingUp, MapPin, Calendar, Shield } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const EnhancedAboutUs = () => {
  const propertyData = [
    { name: 'Mumbai', value: 450, growth: 15 },
    { name: 'Delhi', value: 320, growth: 12 },
    { name: 'Bangalore', value: 380, growth: 18 },
    { name: 'Chennai', value: 250, growth: 10 },
    { name: 'Pune', value: 200, growth: 20 },
    { name: 'Hyderabad', value: 180, growth: 16 }
  ];

  const growthData = [
    { year: '2019', properties: 150, clients: 400 },
    { year: '2020', properties: 280, clients: 650 },
    { year: '2021', properties: 420, clients: 900 },
    { year: '2022', properties: 650, clients: 1400 },
    { year: '2023', properties: 850, clients: 1900 },
    { year: '2024', properties: 1200, clients: 2500 }
  ];

  const marketShare = [
    { name: 'Luxury Apartments', value: 35, color: '#475569' },
    { name: 'Independent Houses', value: 25, color: '#64748b' },
    { name: 'Commercial Spaces', value: 20, color: '#94a3b8' },
    { name: 'Villas', value: 15, color: '#cbd5e1' },
    { name: 'Others', value: 5, color: '#e2e8f0' }
  ];

  const achievements = [
    { icon: Users, number: "2500+", label: "Happy Families", description: "Successful property transactions" },
    { icon: Building, number: "1200+", label: "Properties Sold", description: "Across major Indian cities" },
    { icon: MapPin, number: "15+", label: "Cities Covered", description: "Pan-India presence" },
    { icon: Award, number: "25+", label: "Industry Awards", description: "Recognition for excellence" }
  ];

  const milestones = [
    { year: "2008", event: "Founded Sudhir Realtors", description: "Started with a vision to transform Indian real estate" },
    { year: "2012", event: "Expanded to 5 Cities", description: "Extended operations to major metros" },
    { year: "2018", event: "Digital Transformation", description: "Launched online property platform" },
    { year: "2022", event: "Industry Leadership", description: "Became top 3 realtor in Western India" },
    { year: "2024", event: "Pan-India Presence", description: "Operations across 15+ major cities" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="professional-text">Sudhir Realtors</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leading the Indian real estate market with expertise, integrity, and innovation since 2008
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
              alt="Indian Real Estate Skyline" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl hover-scale"
            />
          </div>
          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              15+ Years of Excellence in Indian Real Estate
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Established in 2008, Sudhir Realtors has been at the forefront of India's real estate revolution. 
              From Mumbai's premium localities to Bangalore's IT corridors, from Delhi's commercial hubs to 
              Chennai's residential complexes, we have facilitated thousands of property transactions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our deep understanding of local markets, regulatory compliance, and cultural nuances makes us 
              the preferred choice for both domestic and NRI clients investing in Indian real estate.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">₹500+ Cr</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Properties Sold</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics with Charts */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Growth Story in Numbers
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Growth Chart */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Year-over-Year Growth
                </CardTitle>
                <CardDescription>Properties sold and client acquisition over the years</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="properties" stroke="#475569" strokeWidth={2} />
                    <Line type="monotone" dataKey="clients" stroke="#64748b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Market Share Chart */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Portfolio Distribution
                </CardTitle>
                <CardDescription>Property types in our portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={marketShare}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {marketShare.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* City-wise Performance */}
          <Card className="professional-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                City-wise Performance
              </CardTitle>
              <CardDescription>Properties sold across major Indian cities</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={propertyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#475569" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={achievement.label} 
                  className={`professional-card hover-lift text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.number}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 dark:bg-slate-600"></div>
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="professional-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-slate-600" />
                        <Badge variant="outline" className="professional-badge">{milestone.year}</Badge>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-700 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in animate-delay-300 order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Serving Every Corner of India
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              From luxury apartments in South Mumbai to affordable housing in Tier-2 cities, 
              from commercial spaces in Gurgaon to villa projects in Goa, our portfolio spans 
              every segment of the Indian real estate market.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We specialize in residential, commercial, and industrial properties, offering 
              end-to-end services including legal documentation, home loans, and post-sales support.
            </p>
            
            {/* Skills Progress */}
            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Market Analysis</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Customer Satisfaction</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">98%</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Legal Compliance</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
            </div>

            <Button asChild className="hover-scale professional-btn">
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Our Journey
                <Award className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="animate-fade-in animate-delay-400 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43" 
              alt="Modern Indian Architecture" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutUs;
