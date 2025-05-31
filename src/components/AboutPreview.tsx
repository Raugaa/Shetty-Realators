
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Sudhir Realtors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 15 years of experience in the real estate industry, Sudhir Realtors has been 
              the trusted choice for families looking to find their perfect home. We pride ourselves 
              on providing personalized service and expert guidance throughout your property journey.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our commitment to excellence has earned us numerous awards and the trust of over 500 
              satisfied clients. We believe that finding the right property is not just about the 
              transaction - it's about finding your future.
            </p>
            <Button asChild className="hover-scale">
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowDown className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="animate-scale-in">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Why Choose Us?
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  What sets us apart in the real estate market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Expert market knowledge</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Personalized service approach</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Transparent communication</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">End-to-end support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
