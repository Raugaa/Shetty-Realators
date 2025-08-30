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
  X,
  Plus,
  Edit,
  Trash2,
  Save,
  ArrowLeft
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import { cmsPropertyStore, type Property } from "@/utils/cmsPropertyStore";
import ImageUpload from "@/components/ImageUpload";

const PropertiesAdmin = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [showPropertyTypeSelector, setShowPropertyTypeSelector] = useState(false);
  const [editingPropertyId, setEditingPropertyId] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState<'residential' | 'commercial' | null>(null);
  
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

  // New property state
  const [newProperty, setNewProperty] = useState({
    title: "",
    location: "",
    type: "Apartment",
    bhk: "2BHK",
    bedrooms: "2",
    bathrooms: "2",
    area: "1200 sq ft",
    description: "",
    features: [] as string[]
  });

  // Load properties from CMS and subscribe to changes
  useEffect(() => {
    setProperties(cmsPropertyStore.getProperties());
    
    const unsubscribe = cmsPropertyStore.subscribe(() => {
      setProperties(cmsPropertyStore.getProperties());
    });
    
    return () => {
      unsubscribe();
      cmsPropertyStore.cleanupBlobUrls();
    };
  }, []);

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

  const handleAddProperty = async () => {
    if (!newProperty.title || !newProperty.location) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    try {
      if (editingPropertyId) {
        // If editing and new images are selected, replace all images
        if (selectedImages.length > 0) {
          await cmsPropertyStore.replaceAllImages(editingPropertyId, selectedImages);
        } else {
          // Update property without changing images
          await cmsPropertyStore.updateProperty(editingPropertyId, {
            ...newProperty,
            bedrooms: parseInt(newProperty.bedrooms),
            bathrooms: parseInt(newProperty.bathrooms)
          });
        }
        setEditingPropertyId(null);
      } else {
        // Add new property
        await cmsPropertyStore.addProperty({
          ...newProperty,
          bedrooms: parseInt(newProperty.bedrooms),
          bathrooms: parseInt(newProperty.bathrooms)
        }, selectedImages);
      }
      
      // Reset form
      setNewProperty({
        title: "",
        location: "",
        type: "Apartment",
        bhk: "2BHK",
        bedrooms: "2",
        bathrooms: "2",
        area: "1200 sq ft",
        description: "",
        features: []
      });
      setSelectedImages([]);
      setShowAddProperty(false);
    } catch (error) {
      console.error("Error saving property:", error);
      alert("Error saving property. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditProperty = (propertyId: string) => {
    const property = properties.find(p => p.id === propertyId);
    if (property) {
              setNewProperty({
          title: property.title,
          location: property.location,
          type: property.type,
          bhk: property.bhk,
          bedrooms: property.bedrooms.toString(),
          bathrooms: property.bathrooms.toString(),
          area: property.area,
          description: property.description,
          features: property.features
        });
      setEditingPropertyId(propertyId);
      setSelectedImages([]);
      setShowAddProperty(true);
    }
  };

  const handleDeleteProperty = async (propertyId: string) => {
    if (confirm("Are you sure you want to delete this property? This will also delete all associated images.")) {
      setIsLoading(true);
      try {
        await cmsPropertyStore.deleteProperty(propertyId);
      } catch (error) {
        console.error("Error deleting property:", error);
        alert("Error deleting property. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handlePropertyTypeSelect = (propertyType: 'residential' | 'commercial') => {
    setSelectedPropertyType(propertyType);
    setShowPropertyTypeSelector(false);
    setShowAddProperty(true);
  };

  const handleContactProperty = () => {
    setSelectedProperty(null); // Close the modal
    navigate('/contact'); // Redirect to contact page
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setNewProperty(prev => ({
        ...prev,
        features: [...prev.features, feature]
      }));
    } else {
      setNewProperty(prev => ({
        ...prev,
        features: prev.features.filter(f => f !== feature)
      }));
    }
  };

  const resetForm = () => {
    setNewProperty({
      title: "",
      location: "",
      type: "Apartment",
      bhk: "2BHK",
      bedrooms: "2",
      bathrooms: "2",
      area: "1200 sq ft",
      description: "",
      features: []
    });
    setSelectedImages([]);
    setEditingPropertyId(null);
    setShowAddProperty(false);
    setSelectedPropertyType(null);
    setShowPropertyTypeSelector(false);
  };

  return (
    <div className="min-h-screen">
      <LoadingBar />
      <div className="professional-bg min-h-screen transition-all duration-700">
        <Navigation />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Property <span className="text-yellow-primary">Management</span>
              </h1>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Manage your property portfolio with CMS storage - Add, edit, and delete properties with ease
              </p>
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <Button className="bg-yellow-primary hover:bg-yellow-primary/90 text-black">
                  🏠 {properties.length} Properties Available
                </Button>
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-dark-gray hover:bg-dark-gray/90 text-white"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
                <Button
                  onClick={() => setShowPropertyTypeSelector(true)}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Property
                </Button>
              </div>
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
                      <SelectContent className="bg-white">
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
                      <SelectContent className="bg-white">
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
                      <SelectContent className="bg-white">
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
                      <SelectContent className="bg-white">
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
                      <SelectContent className="bg-white">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="yes">Sea View</SelectItem>
                        <SelectItem value="no">No Sea View</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.parking} onValueChange={(value) => setFilters({...filters, parking: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Parking" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="yes">Parking Available</SelectItem>
                        <SelectItem value="no">No Parking</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.garden} onValueChange={(value) => setFilters({...filters, garden: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Garden" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="yes">Garden Available</SelectItem>
                        <SelectItem value="no">No Garden</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filters.connectivity} onValueChange={(value) => setFilters({...filters, connectivity: value})}>
                      <SelectTrigger className="professional-input">
                        <SelectValue placeholder="Connectivity" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
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
                    className="bg-dark-gray hover:bg-dark-gray/90 text-white border-dark-gray"
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
                  {/* Image section commented out temporarily */}
                  {/* <div className="relative">
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
                      <Badge className="bg-dark-gray hover:bg-dark-gray/90 text-white">
                        {property.type}
                      </Badge>
                    </div>
                  </div> */}
                  

                  
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
                        className="flex-1 bg-dark-gray hover:bg-dark-gray/90 text-white"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details {/* ({property.images?.length || 0} photos) */}
                      </Button>
                    </div>
                    
                    {/* Admin Actions */}
                    <div className="flex gap-2 mt-4">
                      <Button 
                        size="sm" 
                        onClick={() => handleEditProperty(property.id)}
                        className="flex-1 bg-dark-gray hover:bg-dark-gray/90 text-white text-xs"
                        disabled={isLoading}
                      >
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => handleDeleteProperty(property.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs"
                        disabled={isLoading}
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Property Type Selection Dialog */}
            <Dialog open={showPropertyTypeSelector} onOpenChange={setShowPropertyTypeSelector}>
              <DialogContent className="max-w-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-2xl">
                <DialogHeader className="text-center pb-6">
                  <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Choose Property Type
                  </DialogTitle>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Select the category that best describes your property
                  </p>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {/* Residential Option */}
                  <div 
                    onClick={() => handlePropertyTypeSelect('residential')}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        Residential
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Apartments, Villas, Penthouses, and other residential properties for living purposes
                      </p>
                      <div className="mt-6 flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">Select</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Commercial Option */}
                  <div 
                    onClick={() => handlePropertyTypeSelect('commercial')}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        Commercial
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Offices, Retail Spaces, Warehouses, and other commercial properties for business use
                      </p>
                      <div className="mt-6 flex items-center justify-center space-x-2 text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">Select</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="text-center">
                    <button
                      onClick={() => setShowPropertyTypeSelector(false)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Add Property Dialog */}
            <Dialog open={showAddProperty} onOpenChange={setShowAddProperty}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-800">
                <DialogHeader>
                  <DialogTitle>
                    {editingPropertyId ? 'Edit Property' : `Add New ${selectedPropertyType === 'commercial' ? 'Commercial' : 'Residential'} Property`}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Property Title *</label>
                      <Input
                        value={newProperty.title}
                        onChange={(e) => setNewProperty({...newProperty, title: e.target.value})}
                        placeholder="Enter property title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location *</label>
                      <Input
                        value={newProperty.location}
                        onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                        placeholder="Enter location"
                      />
                    </div>
                    
                    {selectedPropertyType === 'residential' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">Property Type</label>
                          <Select value={newProperty.type} onValueChange={(value) => setNewProperty({...newProperty, type: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Apartment">Apartment</SelectItem>
                              <SelectItem value="Villa">Villa</SelectItem>
                              <SelectItem value="Penthouse">Penthouse</SelectItem>
                              <SelectItem value="Studio">Studio</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">BHK</label>
                          <Select value={newProperty.bhk} onValueChange={(value) => setNewProperty({...newProperty, bhk: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1BHK">1 BHK</SelectItem>
                              <SelectItem value="2BHK">2 BHK</SelectItem>
                              <SelectItem value="3BHK">3 BHK</SelectItem>
                              <SelectItem value="4BHK">4 BHK</SelectItem>
                              <SelectItem value="5BHK">5+ BHK</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Bedrooms</label>
                          <Input
                            value={newProperty.bedrooms}
                            onChange={(e) => setNewProperty({...newProperty, bedrooms: e.target.value})}
                            placeholder="Number of bedrooms"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Bathrooms</label>
                          <Input
                            value={newProperty.bathrooms}
                            onChange={(e) => setNewProperty({...newProperty, bathrooms: e.target.value})}
                            placeholder="Number of bathrooms"
                          />
                        </div>
                      </>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Area</label>
                      <Input
                        value={newProperty.area}
                        onChange={(e) => setNewProperty({...newProperty, area: e.target.value})}
                        placeholder={selectedPropertyType === 'commercial' ? "e.g., 5000 sq ft" : "e.g., 1200 sq ft"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={newProperty.description}
                      onChange={(e) => setNewProperty({...newProperty, description: e.target.value})}
                      placeholder="Enter property description..."
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                    />
                  </div>

                  {/* Image Upload - commented out temporarily */}
                  {/* <div>
                    <label className="block text-sm font-medium mb-2">Property Images</label>
                    <ImageUpload
                      onImagesChange={setSelectedImages}
                      existingImages={editingPropertyId ? properties.find(p => p.id === editingPropertyId)?.images?.map(img => img.image_url) || [] : []}
                      maxImages={10}
                    />
                  </div> */}

                  <div>
                    <label className="block text-sm font-medium mb-2">Features</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {selectedPropertyType === 'residential' ? (
                        // Residential features
                        ["Sea View", "Parking", "Garden", "Balcony", "Gym", "Pool", "Security", "Lift", "AC", "Furnished"].map((feature) => (
                          <label key={feature} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={newProperty.features.includes(feature)}
                              onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                              className="rounded border-gray-300"
                            />
                            <span className="text-sm">{feature}</span>
                          </label>
                        ))
                      ) : (
                        // Commercial features
                        ["Parking", "Security", "Lift", "AC", "Furnished", "Reception", "Conference Room", "Kitchen", "High Speed Internet", "24/7 Access"].map((feature) => (
                          <label key={feature} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={newProperty.features.includes(feature)}
                              onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                              className="rounded border-gray-300"
                            />
                            <span className="text-sm">{feature}</span>
                          </label>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={handleAddProperty}
                      disabled={isLoading}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isLoading ? 'Saving...' : (editingPropertyId ? 'Update Property' : 'Add Property')}
                    </Button>
                    <Button 
                      onClick={resetForm}
                      variant="outline"
                      className="bg-gray-600 hover:bg-gray-700 text-white border-gray-600"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Gallery Modal */}
            <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-800">
                {selectedProperty && (
                  <div className="space-y-6">
                    {/* Image Gallery - commented out temporarily */}
                    {/* <div className="relative">
                      <img 
                        src={selectedProperty.images && selectedProperty.images.length > 0 ? selectedProperty.images[currentImageIndex].image_url : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"}
                        alt={selectedProperty.title}
                        className="w-full h-96 object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      {selectedProperty.images && selectedProperty.images.length > 1 && (
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
                        {currentImageIndex + 1} / {selectedProperty.images?.length || 0}
                      </div>
                    </div> */}

                    {/* Property Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedProperty.title}</h2>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                          <MapPin className="w-5 h-5 mr-2" />
                          <span>{selectedProperty.location}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProperty.description}</p>
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
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {selectedProperty.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button 
                          onClick={handleContactProperty}
                          className="w-full mt-6 bg-dark-gray hover:bg-dark-gray/90 text-white"
                        >
                          Contact for This Property
                        </Button>
                      </div>
                    </div>

                    {/* Thumbnail Gallery - commented out temporarily */}
                    {/* {selectedProperty.images && selectedProperty.images.length > 1 && (
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
                    )} */}
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
                  className="mt-4 bg-dark-gray hover:bg-dark-gray/90 text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center mt-16">
              <Button variant="outline" asChild className="hover-lift px-8 py-4 rounded-xl font-semibold bg-dark-gray hover:bg-dark-gray/90 text-white border-dark-gray">
                <Link to="/" className="flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5" />
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

export default PropertiesAdmin;
