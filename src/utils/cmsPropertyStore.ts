
export interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  bhk: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  description: string | null;
  features: string[];
  created_at?: string | null;
  updated_at?: string | null;
  images?: PropertyImage[];
}

export interface PropertyImage {
  id: string;
  property_id: string | null;
  image_url: string;
  image_order: number | null;
  created_at?: string | null;
}

// Initial mock data with sample properties and images
const initialProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Sea View Apartment",
    location: "Marine Drive, Mumbai",
    type: "Apartment",
    bhk: "3BHK",
    area: "1500 sq ft",
    bedrooms: 3,
    bathrooms: 2,
    description: "Beautiful sea-facing apartment with modern amenities and stunning views of the Arabian Sea.",
    features: ["Sea View", "Parking", "Swimming Pool", "Gym", "Security"],
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
    images: [
      {
        id: "img1",
        property_id: "1",
        image_url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        image_order: 0,
        created_at: "2024-01-15T10:00:00Z"
      },
      {
        id: "img2",
        property_id: "1", 
        image_url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
        image_order: 1,
        created_at: "2024-01-15T10:00:00Z"
      },
      {
        id: "img3",
        property_id: "1",
        image_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        image_order: 2,
        created_at: "2024-01-15T10:00:00Z"
      }
    ]
  },
  {
    id: "2",
    title: "Modern Business Center",
    location: "Bandra Kurla Complex, Mumbai",
    type: "Office",
    bhk: "Commercial",
    area: "2500 sq ft",
    bedrooms: 0,
    bathrooms: 4,
    description: "State-of-the-art commercial space perfect for growing businesses with modern infrastructure.",
    features: ["Parking", "Conference Rooms", "High Speed Internet", "Security", "HVAC"],
    created_at: "2024-01-16T10:00:00Z",
    updated_at: "2024-01-16T10:00:00Z",
    images: [
      {
        id: "img4",
        property_id: "2",
        image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        image_order: 0,
        created_at: "2024-01-16T10:00:00Z"
      },
      {
        id: "img5",
        property_id: "2",
        image_url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
        image_order: 1,
        created_at: "2024-01-16T10:00:00Z"
      }
    ]
  },
  {
    id: "3",
    title: "Corporate Headquarters",
    location: "Cyber City, Gurgaon",
    type: "Office",
    bhk: "Commercial",
    area: "5000 sq ft",
    bedrooms: 0,
    bathrooms: 6,
    description: "Premium corporate space with panoramic city views and world-class amenities.",
    features: ["Parking", "Conference Rooms", "Cafeteria", "Security", "HVAC", "Reception"],
    created_at: "2024-01-17T10:00:00Z",
    updated_at: "2024-01-17T10:00:00Z",
    images: [
      {
        id: "img6",
        property_id: "3",
        image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        image_order: 0,
        created_at: "2024-01-17T10:00:00Z"
      },
      {
        id: "img7",
        property_id: "3",
        image_url: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?auto=format&fit=crop&w=800&q=80",
        image_order: 1,
        created_at: "2024-01-17T10:00:00Z"
      },
      {
        id: "img8",
        property_id: "3",
        image_url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
        image_order: 2,
        created_at: "2024-01-17T10:00:00Z"
      }
    ]
  },
  {
    id: "4",
    title: "Retail Space in Prime Location",
    location: "Connaught Place, Delhi",
    type: "Retail",
    bhk: "Commercial",
    area: "1200 sq ft",
    bedrooms: 0,
    bathrooms: 2,
    description: "High-footfall retail space in the heart of Delhi's business district.",
    features: ["Parking", "High Visibility", "HVAC", "Security"],
    created_at: "2024-01-18T10:00:00Z",
    updated_at: "2024-01-18T10:00:00Z",
    images: [
      {
        id: "img9",
        property_id: "4",
        image_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
        image_order: 0,
        created_at: "2024-01-18T10:00:00Z"
      },
      {
        id: "img10",
        property_id: "4",
        image_url: "https://images.unsplash.com/photo-1555529902-72004966eaff?auto=format&fit=crop&w=800&q=80",
        image_order: 1,
        created_at: "2024-01-18T10:00:00Z"
      }
    ]
  },
  {
    id: "5",
    title: "Tech Hub Office Space",
    location: "Electronic City, Bangalore",
    type: "Office",
    bhk: "Commercial",
    area: "3500 sq ft",
    bedrooms: 0,
    bathrooms: 4,
    description: "Modern office space in Bangalore's premier IT hub with excellent connectivity.",
    features: ["Parking", "Conference Rooms", "High Speed Internet", "Security", "HVAC", "Cafeteria"],
    created_at: "2024-01-19T10:00:00Z",
    updated_at: "2024-01-19T10:00:00Z",
    images: [
      {
        id: "img11",
        property_id: "5",
        image_url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
        image_order: 0,
        created_at: "2024-01-19T10:00:00Z"
      },
      {
        id: "img12",
        property_id: "5",
        image_url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        image_order: 1,
        created_at: "2024-01-19T10:00:00Z"
      }
    ]
  },
  {
    id: "6",
    title: "Warehouse & Distribution Center",
    location: "Bhiwandi, Mumbai",
    type: "Warehouse",
    bhk: "Commercial",
    area: "10000 sq ft",
    bedrooms: 0,
    bathrooms: 4,
    description: "Large warehouse facility with loading docks and excellent transportation connectivity.",
    features: ["Parking", "Loading Dock", "Security", "HVAC", "High Ceiling"],
    created_at: "2024-01-20T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
    images: [
      {
        id: "img13",
        property_id: "6",
        image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        image_order: 0,
        created_at: "2024-01-20T10:00:00Z"
      },
      {
        id: "img14",
        property_id: "6",
        image_url: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
        image_order: 1,
        created_at: "2024-01-20T10:00:00Z"
      }
    ]
  }
];

class CMSPropertyStore {
  private listeners: (() => void)[] = [];
  private properties: Property[] = [];
  private storageKey = 'sudhir-realtors-properties';

  constructor() {
    this.loadPropertiesFromStorage();
    // If no properties in storage, initialize with mock data
    if (this.properties.length === 0) {
      this.properties = [...initialProperties];
      this.savePropertiesToStorage();
    }
    // Notify listeners after initialization
    setTimeout(() => {
      this.notifyListeners();
    }, 100);
  }

  private loadPropertiesFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.properties = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading properties from storage:', error);
      this.properties = [...initialProperties];
    }
  }

  private savePropertiesToStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.properties));
    } catch (error) {
      console.error('Error saving properties to storage:', error);
    }
  }

  getProperties(): Property[] {
    return [...this.properties];
  }

  async addProperty(property: Omit<Property, 'id'>, imageFiles: File[] = []): Promise<void> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100)); // Reduced delay for faster updates
    
    const propertyId = Date.now().toString();
    
    const newProperty: Property = {
      ...property,
      id: propertyId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      images: imageFiles.map((file, index) => ({
        id: `img_${propertyId}_${index}`,
        property_id: propertyId,
        image_url: URL.createObjectURL(file), // Convert File to blob URL
        image_order: index,
        created_at: new Date().toISOString()
      }))
    };

    this.properties.unshift(newProperty);
    this.savePropertiesToStorage();
    this.notifyListeners();
  }

  async updateProperty(id: string, property: Omit<Property, 'id'>, imageFiles: File[] = []): Promise<void> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100)); // Reduced delay for faster updates
    
    const index = this.properties.findIndex(p => p.id === id);
    if (index !== -1) {
      const existingImages = this.properties[index].images || [];
      let finalImages = [...existingImages];
      
      // Only add new images if they exist
      if (imageFiles.length > 0) {
        const newImages = imageFiles.map((file, index) => ({
          id: `img_${id}_${Date.now()}_${index}`,
          property_id: id,
          image_url: URL.createObjectURL(file), // Convert File to blob URL
          image_order: existingImages.length + index,
          created_at: new Date().toISOString()
        }));
        finalImages = [...existingImages, ...newImages];
      }

      this.properties[index] = {
        ...property,
        id,
        updated_at: new Date().toISOString(),
        images: finalImages
      };
      
      this.savePropertiesToStorage();
      this.notifyListeners();
    }
  }

  async deleteProperty(id: string): Promise<void> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100)); // Reduced delay for faster updates
    
    // Clean up blob URLs before deleting
    const property = this.properties.find(p => p.id === id);
    if (property && property.images) {
      property.images.forEach(image => {
        if (image.image_url.startsWith('blob:')) {
          URL.revokeObjectURL(image.image_url);
        }
      });
    }
    
    this.properties = this.properties.filter(p => p.id !== id);
    this.savePropertiesToStorage();
    this.notifyListeners();
  }

  // Method to clean up blob URLs when component unmounts
  cleanupBlobUrls(): void {
    this.properties.forEach(property => {
      if (property.images) {
        property.images.forEach(image => {
          if (image.image_url.startsWith('blob:')) {
            URL.revokeObjectURL(image.image_url);
          }
        });
      }
    });
  }

  // Method to replace all images for a property
  async replaceAllImages(propertyId: string, imageFiles: File[]): Promise<void> {
    const index = this.properties.findIndex(p => p.id === propertyId);
    if (index !== -1) {
      // Clean up existing blob URLs
      const existingImages = this.properties[index].images || [];
      existingImages.forEach(image => {
        if (image.image_url.startsWith('blob:')) {
          URL.revokeObjectURL(image.image_url);
        }
      });

      // Create new images
      const newImages = imageFiles.map((file, index) => ({
        id: `img_${propertyId}_${Date.now()}_${index}`,
        property_id: propertyId,
        image_url: URL.createObjectURL(file),
        image_order: index,
        created_at: new Date().toISOString()
      }));

      this.properties[index] = {
        ...this.properties[index],
        images: newImages,
        updated_at: new Date().toISOString()
      };

      this.savePropertiesToStorage();
      this.notifyListeners();
    }
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    // Notify all listeners immediately for instant updates
    this.listeners.forEach(listener => {
      try {
        listener();
      } catch (error) {
        console.error('Error in listener:', error);
      }
    });
  }
}

export const cmsPropertyStore = new CMSPropertyStore();
