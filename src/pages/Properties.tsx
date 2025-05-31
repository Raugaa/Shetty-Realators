
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDown, ArrowUp, Home, Contact, Bed, Bath, Square, MapPin, Camera, X, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Properties = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPropertyImages, setCurrentPropertyImages] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedBHK, setSelectedBHK] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const properties = [
    {
      id: 1,
      title: "Luxury Apartment in South Mumbai",
      location: "Bandra West, Mumbai, Maharashtra",
      bedrooms: "3 BHK",
      bathrooms: "3",
      sqft: "1,850",
      images: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1487252665478-49b61b47f302"
      ],
      type: "Apartment",
      status: "Ready to Move",
      description: "Premium apartment with sea view in prime Bandra location",
      features: ["Sea View", "Parking", "24x7 Security", "Gym", "Swimming Pool", "Connectivity"]
    },
    {
      id: 2,
      title: "Independent Villa in Whitefield",
      location: "Whitefield, Bangalore, Karnataka",
      bedrooms: "4 BHK",
      bathrooms: "4",
      sqft: "3,200",
      images: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      ],
      type: "Villa",
      status: "Under Construction",
      description: "Spacious villa in IT hub with modern amenities",
      features: ["Garden", "Parking", "Solar Panels", "Club House", "Children's Play Area", "Connectivity"]
    },
    {
      id: 3,
      title: "Modern Flat in Sector 62",
      location: "Sector 62, Noida, Uttar Pradesh",
      bedrooms: "2 BHK",
      bathrooms: "2",
      sqft: "1,200",
      images: [
        "https://images.unsplash.com/photo-1487252665478-49b61b47f302"
      ],
      type: "Apartment",
      status: "Ready to Move",
      description: "Well-connected apartment near metro station",
      features: ["Connectivity", "Shopping Mall Nearby", "School Zone", "Hospital Access", "Parking"]
    }
  ];

  const allFeatures = ["Sea View", "Parking", "Garden", "24x7 Security", "Gym", "Swimming Pool", "Connectivity", "Solar Panels", "Club House", "Children's Play Area"];
  const locations = ["Mumbai", "Bangalore", "Noida", "Delhi", "Chennai", "Pune"];
  const propertyTypes = ["Apartment", "Villa", "Independent House"];
  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const openImageGallery = (images: string[], index: number = 0) => {
    setCurrentPropertyImages(images);
    setCurrentImageIndex(index);
    setSelectedImage(images[index]);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % currentPropertyImages.length
      : (currentImageIndex - 1 + currentPropertyImages.length) % currentPropertyImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentPropertyImages[newIndex]);
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || property.location.includes(selectedLocation);
    const matchesType = !selectedType || property.type === selectedType;
    const matchesBHK = !selectedBHK || property.bedrooms === selectedBHK;
    const matchesFeatures = selectedFeatures.length === 0 || 
                           selectedFeatures.every(feature => property.features.includes(feature));
    
    return matchesSearch && matchesLocation && matchesType && matchesBHK && matchesFeatures;
  });

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="professional-bg min-h-screen transition-all duration-500">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Premium Properties Across India
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover your dream home from our carefully curated selection of properties in major Indian cities
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
                <Input
                  type="text"
                  placeholder="Search by location or property name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 max-w-md"
                />
                <Button 
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>

              {showFilters && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any Location</SelectItem>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Property Type</label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any Type</SelectItem>
                        {propertyTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">BHK</label>
                    <Select value={selectedBHK} onValueChange={setSelectedBHK}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any BHK" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any BHK</SelectItem>
                        {bhkOptions.map(bhk => (
                          <SelectItem key={bhk} value={bhk}>{bhk}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Features</label>
                    <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                      {allFeatures.map(feature => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox
                            id={feature}
                            checked={selectedFeatures.includes(feature)}
                            onCheckedChange={() => handleFeatureToggle(feature)}
                          />
                          <label htmlFor={feature} className="text-xs">{feature}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <Card
                  key={property.id}
                  className="professional-card hover-scale transition-all duration-300 hover:shadow-xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-48 object-cover cursor-pointer hover-scale"
                      onClick={() => openImageGallery(property.images, 0)}
                    />
                    {property.images.length > 1 && (
                      <Badge className="absolute top-3 left-3 bg-slate-700 text-white">
                        <Camera className="w-3 h-3 mr-1" />
                        {property.images.length} Photos
                      </Badge>
                    )}
                    <Badge
                      variant={property.status === "Ready to Move" ? "default" : "secondary"}
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
                      <Badge variant="outline" className="professional-badge">{property.type}</Badge>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {property.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <div className="text-center">
                        <div className="font-semibold flex items-center justify-center">
                          <Bed className="w-4 h-4 mr-1" />
                          {property.bedrooms}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold flex items-center justify-center">
                          <Bath className="w-4 h-4 mr-1" />
                          {property.bathrooms} Bath
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold flex items-center justify-center">
                          <Square className="w-4 h-4 mr-1" />
                          {property.sqft} sq ft
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {property.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {property.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{property.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full professional-btn hover-scale"
                      onClick={() => openImageGallery(property.images, 0)}
                    >
                      View Details & Gallery
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No properties found matching your search criteria.
                </p>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Button variant="outline" asChild className="hover-scale professional-btn-outline">
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Image Modal with Gallery Navigation */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-5xl" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {currentPropertyImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => navigateImage('prev')}
                  >
                    <ArrowDown className="w-6 h-6 rotate-90" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => navigateImage('next')}
                  >
                    <ArrowUp className="w-6 h-6 rotate-90" />
                  </Button>
                </>
              )}

              <img 
                src={selectedImage} 
                alt="Property" 
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {currentPropertyImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 rounded-full px-4 py-2">
                  <span className="text-white text-sm">
                    {currentImageIndex + 1} / {currentPropertyImages.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Properties;
