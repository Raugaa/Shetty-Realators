
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Building } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-slate-800 dark:bg-slate-900 border-slate-700 dark:border-slate-800 text-white overflow-hidden relative shadow-2xl">
          <CardContent className="relative z-10 p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-white">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-100 dark:text-gray-200 animate-fade-in animate-delay-200">
              Let our expert team guide you through India's best real estate opportunities. 
              From luxury apartments to commercial spaces, we have something for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-400">
              <Button size="lg" className="hover-lift bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl border-none shadow-lg transition-all duration-300">
                <Link to="/properties" className="flex items-center gap-3 text-slate-900">
                  <Building className="w-6 h-6" />
                  Browse Properties
                </Link>
              </Button>
              <Button size="lg" className="hover-lift bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl border-none shadow-lg transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-3 text-slate-900">
                  <Phone className="w-6 h-6" />
                  Contact Our Experts
                </Link>
              </Button>
            </div>
          </CardContent>
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)'
            }}></div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
