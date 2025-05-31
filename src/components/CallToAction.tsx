
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Contact, Building } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 border-0 text-white animate-fade-in">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let our experienced team help you navigate the real estate market with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                asChild
                className="hover-scale bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link to="/properties" className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Browse Properties
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="hover-scale border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Contact className="w-5 h-5" />
                  Get In Touch
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
