
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Home, 
  Search, 
  MapPin, 
  Square, 
  ChevronLeft,
  ChevronRight,
  Eye,
  Camera,
  Filter,
  X,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import { cmsPropertyStore, type Property } from "@/utils/cmsPropertyStore";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  
  // Filter states
  const [filters, setFilters] = useState({
    location: "all",
    propertyType: "all",
    area: "all"
  });

  // Load properties from CMS store
  useEffect(() => {
    setProperties(cmsPropertyStore.getProperties());
    
    const unsubscribe = cmsPropertyStore.subscribe(() => {
      setProperties(cmsPropertyStore.getProperties());
    });
    
    return unsubscribe;
  }, []);

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = filters.location === "all" || property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType = filters.propertyType === "all" || property.type.toLowerCase() === filters.propertyType.toLowerCase();

    return matchesSearch && matchesLocation && matchesType;
  });

  const openGallery = (property: Property, imageIndex: number = 0) => {
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
      area: "all"
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen">
      <LoadingBar />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all duration-700">
        <Navigation />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Commercial <span className="text-yellow-primary">Properties</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover premium commercial spaces across Pune - from modern offices to retail outlets
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Building className="w-4 h-4 mr-2" />
                  {properties.length} Properties Available
                </Badge>
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-yellow-primary hover:bg-yellow-primary/90 text-black"
              >
                <Filter className="w-4 h-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Search properties by name or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Filter Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="baner">Baner</SelectItem>
                        <SelectItem value="hinjewadi">Hinjewadi</SelectItem>
                        <SelectItem value="koregaon park">Koregaon Park</SelectItem>
                        <SelectItem value="viman nagar">Viman Nagar</SelectItem>
                        <SelectItem value="fc road">FC Road</SelectItem>
                        <SelectItem value="chakan">Chakan</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.propertyType} onValueChange={(value) => setFilters({...filters, propertyType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="warehouse">Warehouse</SelectItem>
                        <SelectItem value="co-working">Co-working</SelectItem>
                        <SelectItem value="bank branch">Bank Branch</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.area} onValueChange={(value) => setFilters({...filters, area: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Area Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Sizes</SelectItem>
                        <SelectItem value="small">Under 2000 sq ft</SelectItem>
                        <SelectItem value="medium">2000-10000 sq ft</SelectItem>
                        <SelectItem value="large">Above 10000 sq ft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={resetFilters}
                    variant="outline"
                    className="border-yellow-primary text-yellow-primary hover:bg-yellow-primary hover:text-black"
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
                  className={`hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] animate-fade-in animate-delay-${(index + 1) * 100} bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-0 shadow-lg`}
                >
                  <div className="relative">
                    <img 
                      src={property.images[0] || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"} 
                      alt={property.title}
                      className="w-full h-64 object-cover rounded-t-xl cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openGallery(property, 0)}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2">
                      <Camera className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-yellow-primary hover:bg-yellow-primary/90 text-black">
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
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.area}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          {feature}
                        </Badge>
                      ))}
                      {property.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          +{property.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button 
                        onClick={() => openGallery(property, 0)}
                        className="flex-1 bg-yellow-primary hover:bg-yellow-primary/90 text-black"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details ({property.images.length} photos)
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
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">{selectedProperty.title}</DialogTitle>
                    </DialogHeader>
                    
                    {/* Image Gallery */}
                    <div className="relative">
                      <img 
                        src={selectedProperty.images[currentImageIndex]} 
                        alt={selectedProperty.title}
                        className="w-full h-96 object-cover rounded-lg"
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
                            <Square className="w-5 h-5" />
                            <span>{selectedProperty.area}</span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                            <Building className="w-5 h-5" />
                            <span>{selectedProperty.type}</span>
                          </div>
                        </div>
                        
                        <Button className="w-full mt-6 bg-yellow-primary hover:bg-yellow-primary/90 text-black" asChild>
                          <Link to="/contact">
                            Contact for This Property
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    {selectedProperty.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {selectedProperty.images.map((image: string, index: number) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${selectedProperty.title} ${index + 1}`}
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                              currentImageIndex === index ? 'border-yellow-primary' : 'border-transparent'
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
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
                <div className="text-gray-600 dark:text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">No properties found</h3>
                  <p>Try adjusting your search criteria</p>
                </div>
                <Button 
                  onClick={resetFilters}
                  className="mt-4 bg-yellow-primary hover:bg-yellow-primary/90 text-black"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center mt-16">
              <Button variant="outline" asChild className="hover:bg-yellow-primary hover:text-black px-8 py-4 rounded-xl font-semibold border-yellow-primary text-yellow-primary">
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
