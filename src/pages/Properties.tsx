
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowDown, ArrowUp, Home, Contact } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Properties = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      price: "$750,000",
      location: "Downtown District",
      bedrooms: 4,
      bathrooms: 3,
      sqft: "2,500",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      type: "House",
      status: "For Sale"
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      price: "$1,200,000",
      location: "City Center",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      type: "Apartment",
      status: "For Sale"
    },
    {
      id: 3,
      title: "Cozy Suburban Villa",
      price: "$550,000",
      location: "Green Valley",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "2,000",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
      type: "Villa",
      status: "For Rent"
    }
  ];

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all duration-500">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our Properties
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover your perfect home from our carefully curated selection of premium properties
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Search by location or property name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-center"
                />
              </div>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <Card
                  key={property.id}
                  className="hover-scale bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge
                      variant={property.status === "For Sale" ? "default" : "secondary"}
                      className="absolute top-3 right-3"
                    >
                      {property.status}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {property.title}
                      </CardTitle>
                      <Badge variant="outline">{property.type}</Badge>
                    </div>
                    <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {property.price}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">📍 {property.location}</p>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="text-center">
                        <div className="font-semibold">{property.bedrooms}</div>
                        <div>Bedrooms</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{property.bathrooms}</div>
                        <div>Bathrooms</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{property.sqft}</div>
                        <div>Sq Ft</div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 hover-scale">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No properties found matching your search.
                </p>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Button variant="outline" asChild className="hover-scale">
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Properties;
