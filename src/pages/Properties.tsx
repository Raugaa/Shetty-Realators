import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Home, 
  Search, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  Camera,
  Filter,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import { supabasePropertyStore, type Property } from "@/utils/supabasePropertyStore";

const Properties = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  
  // Filter states
  const [filters, setFilters] = useState({
    location: "all",
    propertyType: "all",
    bhk: "all",
    priceRange: "all",
    seaView: "all",
    parking: "all",
    garden: "all",
    connectivity: "all"
  });

  // Load properties from Supabase and subscribe to changes
  useEffect(() => {
    setProperties(supabasePropertyStore.getProperties());
    
    const unsubscribe = supabasePropertyStore.subscribe(() => {
      setProperties(supabasePropertyStore.getProperties());
    });
    
    return unsubscribe;
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = filters.location === "all" || property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType = filters.propertyType === "all" || property.type.toLowerCase() === filters.propertyType.toLowerCase();
    const matchesBHK = filters.bhk === "all" || property.bhk === filters.bhk;
    const matchesSeaView = filters.seaView === "all" || (filters.seaView === "yes" && property.features.includes("Sea View"));
    const matchesParking = filters.parking === "all" || (filters.parking === "yes" && property.features.includes("Parking"));
    const matchesGarden = filters.garden === "all" || (filters.garden === "yes" && property.features.includes("Garden"));

    return matchesSearch && matchesLocation && matchesType && matchesBHK && matchesSeaView && matchesParking && matchesGarden;
  });

  const openGallery = (property: any, imageIndex: number = 0) => {
    setSelectedProperty(property);
    setCurrentImageIndex(imageIndex);
  };

  const nextImage = () => {
    if (selectedProperty && selectedProperty.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProperty && selectedProperty.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      );
    }
  };

  const resetFilters = () => {
    setFilters({
      location: "all",
      propertyType: "all",
      bhk: "all",
      priceRange: "all",
      seaView: "all",
      parking: "all",
      garden: "all",
      connectivity: "all"
    });
    setSearchTerm("");
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <LoadingBar />
      <div className="professional-bg min-h-screen transition-all duration-700">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Premium <span className="text-gray-300">Properties</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover premium properties across India with stunning visuals and detailed information
              </p>
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  🏠 {properties.length} Properties Available
                </Button>
                <Button asChild className="professional-btn text-white">
                  <Link to="/properties-admin">
                    👨‍💼 Admin Mode
                  </Link>
                </Button>
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="glass-effect border-white/20 text-white hover:bg-white/20"
              >
                <Filter className="w-4 h-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <Card className="mb-8 filter-card">
                <CardContent className="p-6">
                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Search properties..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 professional-input"
                      />
                    </div>
                  </div>

                  {/* Filter Options */}
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-4">
                    <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.propertyType} onValueChange={(value) => setFilters({...filters, propertyType: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.bhk} onValueChange={(value) => setFilters({...filters, bhk: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="BHK" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="all">All BHK</SelectItem>
                        <SelectItem value="1BHK">1 BHK</SelectItem>
                        <SelectItem value="2BHK">2 BHK</SelectItem>
                        <SelectItem value="3BHK">3 BHK</SelectItem>
                        <SelectItem value="4BHK">4 BHK</SelectItem>
                        <SelectItem value="5BHK">5+ BHK</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Price" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="under-1cr">Under ₹1 Cr</SelectItem>
                        <SelectItem value="1-3cr">₹1-3 Cr</SelectItem>
                        <SelectItem value="3-5cr">₹3-5 Cr</SelectItem>
                        <SelectItem value="above-5cr">Above ₹5 Cr</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.seaView} onValueChange={(value) => setFilters({...filters, seaView: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Sea View" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="yes">Sea View</SelectItem>
                        <SelectItem value="no">No Sea View</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.parking} onValueChange={(value) => setFilters({...filters, parking: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Parking" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="yes">Parking Available</SelectItem>
                        <SelectItem value="no">No Parking</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.garden} onValueChange={(value) => setFilters({...filters, garden: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Garden" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="yes">Garden Available</SelectItem>
                        <SelectItem value="no">No Garden</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.connectivity} onValueChange={(value) => setFilters({...filters, connectivity: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Connectivity" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="metro">Near Metro</SelectItem>
                        <SelectItem value="highway">Highway Access</SelectItem>
                        <SelectItem value="airport">Near Airport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={resetFilters}
                    variant="outline"
                    className="professional-btn-outline text-white border-white/20 hover:bg-white/20"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <Card 
                  key={property.id} 
                  className={`professional-card hover-lift animate-fade-in animate-delay-${(index + 1) * 100} bg-white/95 dark:bg-gray-800/95 backdrop-blur-md`}
                >
                  <div className="relative">
                    <img 
                      src={property.images && property.images.length > 0 ? property.images[0].image_url : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"} 
                      alt={property.title}
                      className="w-full h-64 object-cover rounded-t-xl cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openGallery(property, 0)}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2">
                      <Camera className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="professional-btn text-white">
                        {property.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{property.title}</h3>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{property.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.area}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button 
                        onClick={() => openGallery(property, 0)}
                        className="flex-1 professional-btn text-white"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details ({property.images?.length || 0} photos)
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Gallery Modal */}
            <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-800">
                {selectedProperty && (
                  <div className="space-y-6">
                    {/* Image Gallery */}
                    <div className="relative">
                      <img 
                        src={selectedProperty.images && selectedProperty.images[currentImageIndex] ? selectedProperty.images[currentImageIndex].image_url : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"}
                        alt={selectedProperty.title}
                        className="w-full h-96 object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      {selectedProperty.images.length > 1 && (
                        <>
                          <Button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </Button>
                          <Button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </Button>
                        </>
                      )}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {selectedProperty.images.length}
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedProperty.title}</h2>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                          <MapPin className="w-5 h-5 mr-2" />
                          <span>{selectedProperty.location}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProperty.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedProperty.features.map((feature: string, idx: number) => (
                            <Badge key={idx} variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                            <Bed className="w-5 h-5" />
                            <span>{selectedProperty.bedrooms} Bedrooms</span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                            <Bath className="w-5 h-5" />
                            <span>{selectedProperty.bathrooms} Bathrooms</span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                            <Square className="w-5 h-5" />
                            <span>{selectedProperty.area}</span>
                          </div>
                        </div>
                        
                        <Button className="w-full mt-6 professional-btn text-white">
                          Contact for This Property
                        </Button>
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    {selectedProperty.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {selectedProperty.images.map((image: any, index: number) => (
                          <img
                            key={index}
                            src={image.image_url}
                            alt={`${selectedProperty.title} ${index + 1}`}
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                              currentImageIndex === index ? 'border-slate-700' : 'border-transparent'
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* No Results */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <div className="text-white/70 mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">No properties found</h3>
                  <p>Try adjusting your search criteria</p>
                </div>
                <Button 
                  onClick={resetFilters}
                  className="mt-4 professional-btn text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center mt-16">
              <Button variant="outline" asChild className="hover-lift professional-btn-outline px-8 py-4 rounded-xl font-semibold border-white/20 text-white hover:bg-white/20">
                <Link to="/" className="flex items-center gap-3">
                  <Home className="w-5 h-5" />
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
