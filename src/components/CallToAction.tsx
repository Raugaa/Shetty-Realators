
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Building } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto">
        <Card className="professional-card bg-gray-600 dark:bg-gray-700 border-none text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-800/50"></div>
          <CardContent className="relative z-10 p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-white/90 animate-fade-in animate-delay-200">
              Let our expert team guide you through India's best real estate opportunities. 
              From luxury apartments to commercial spaces, we have something for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-400">
              <Button size="lg" className="hover-lift professional-btn bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Link to="/properties" className="flex items-center gap-3">
                  <Building className="w-6 h-6" />
                  Browse Properties
                </Link>
              </Button>
              <Button size="lg" className="hover-lift professional-btn bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Link to="/contact" className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Contact Our Experts
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
