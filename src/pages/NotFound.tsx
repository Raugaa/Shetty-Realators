import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO 
        title="Page Not Found - Shetty Realtors"
        description="The page you're looking for doesn't exist or has been moved. Return to our homepage to continue browsing our commercial real estate listings."
        keywords="404 error, page not found, broken link, real estate, commercial property"
        ogTitle="Page Not Found - Shetty Realtors"
        ogDescription="The page you're looking for doesn't exist or has been moved. Return to our homepage to continue browsing our commercial real estate listings."
        canonicalUrl="https://shettyrealtors.com/404"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
