
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Award, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2500+",
      label: "Happy Families",
      description: "Satisfied customers across India",
      color: "bg-slate-600"
    },
    {
      icon: Home,
      number: "15+",
      label: "Years Experience",
      description: "In Indian real estate market",
      color: "bg-slate-700"
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards Won",
      description: "Industry recognition & trust",
      color: "bg-slate-800"
    },
    {
      icon: TrendingUp,
      number: "5000+",
      label: "Properties Sold",
      description: "Successful transactions",
      color: "bg-slate-900"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose <span className="professional-text">Sudhir Realtors</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in Indian real estate with proven track record of excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className={`professional-card hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
