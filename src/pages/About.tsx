
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import EnhancedAboutUs from "@/components/EnhancedAboutUs";

const About = () => {
  return (
    <div className="min-h-screen">
      <LoadingBar />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all duration-700">
        <Navigation />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Connecting Businesses with the{" "}
                <span className="text-yellow-primary">Right Space</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                With over 30 years of expertise in Pune's commercial real estate market, we've established ourselves as the premier partner for businesses seeking the perfect commercial space.
              </p>
            </div>

            <EnhancedAboutUs />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
