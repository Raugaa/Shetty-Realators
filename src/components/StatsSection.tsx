
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied families in their dream homes",
      color: "bg-blue-500"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Decades of real estate expertise",
      color: "bg-green-500"
    },
    {
      number: "50+",
      label: "Awards Won",
      description: "Recognition for excellence",
      color: "bg-purple-500"
    },
    {
      number: "1000+",
      label: "Properties Sold",
      description: "Successful transactions completed",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence in real estate services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover-scale bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{stat.number.charAt(0)}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </h3>
                <Badge variant="outline" className="mb-3">
                  {stat.label}
                </Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
