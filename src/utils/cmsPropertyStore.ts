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
    title: "Office Premise for Lease",
    location: "Baner Road, Near Kapli Malahar",
    type: "Office",
    bhk: "Commercial",
    area: "5 lacs sq.ft.",
    bedrooms: 0,
    bathrooms: 0,
    description: "Showroom area - 18 thousand sq.ft for lease.",
    features: [],
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
    
  },
  {
    id: "2",
    title: "Office Premise for Rent/Lease",
    location: "Balewadi Highstreet",
    type: "Office",
    bhk: "Commercial",
    area: "10 lacs sq.ft.",
    bedrooms: 0,
    bathrooms: 0,
    description: "",
    features: [],
    created_at: "2024-01-16T10:00:00Z",
    updated_at: "2024-01-16T10:00:00Z",
    
  },
  {
    id: "3",
    title: "Athawade Office Premise",
    location: "Athawade",
    type: "Office",
    bhk: "Commercial",
    area: "50 lacs sq.ft.",
    bedrooms: 0,
    bathrooms: 0,
    description: "For Rent/Lease. Under construction.",
    features: [],
    created_at: "2024-01-17T10:00:00Z",
    updated_at: "2024-01-17T10:00:00Z",
    // images: [...]
  },
  {
    id: "4",
    title: "Office Premise for Rent/Lease",
    location: "Vimannagar, On New Airport road",
    type: "Office",
    bhk: "Commercial",
    area: "12 lacs sq.ft.",
    bedrooms: 0,
    bathrooms: 0,
    description: "Showroom around 5,000 sq.ft.",
    features: [],
    created_at: "2024-01-18T10:00:00Z",
    updated_at: "2024-01-18T10:00:00Z",
    // images: [...]
  },
  {
    id: "5",
    title: "Office Premises for Rent/Lease",
    location: "Kharadi",
    type: "Office",
    bhk: "Commercial",
    area: "5 lacs sq.ft.",
    bedrooms: 0,
    bathrooms: 0,
    description: "",
    features: [],
    created_at: "2024-01-19T10:00:00Z",
    updated_at: "2024-01-19T10:00:00Z",
    // images: [...]
  },
  {
    id: "6",
    title: "Office Premise for Rent/Lease",
    location: "Mundhwa, Koregaon Annex",
    type: "Office",
    bhk: "Commercial",
    area: "20 lacs sq.ft.",
    bedrooms: 0,
    bathrooms: 0,
    description: "Showroom around 25,000 sq.ft.",
    features: [],
    created_at: "2024-01-20T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
    // images: [...]
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

// Add a property
// await cmsPropertyStore.addProperty({
//   title: "New Property",
//   location: "Some Location",
//   type: "Apartment",
//   bhk: "2BHK",
//   area: "1200 sq ft",
//   bedrooms: 2,
//   bathrooms: 2,
//   description: "Description here",
//   features: [],
//   created_at: null,
//   updated_at: null,
//   images: []
// }, [/* image files here */]);

// Update a property
// await cmsPropertyStore.updateProperty("1", {
//   title: "Updated Property Title",
//   location: "Updated Location",
//   type: "Office",
//   bhk: "Commercial",
//   area: "5000 sq ft",
//   bedrooms: 0,
//   bathrooms: 4,
//   description: "Updated description",
//   features: [],
//   created_at: null,
//   updated_at: null,
//   images: []
// }, [/* new image files here */]);

// Delete a property
// await cmsPropertyStore.deleteProperty("1");
//   updated_at: null,
//   images: []
// }, [/* image files here */]);

// Update a property
// await cmsPropertyStore.updateProperty("1", {
//   title: "Updated Property Title",
//   location: "Updated Location",
//   type: "Office",
//   bhk: "Commercial",
//   area: "5000 sq ft",
//   bedrooms: 0,
//   bathrooms: 4,
//   description: "Updated description",
//   features: [],
//   created_at: null,
//   updated_at: null,
//   images: []
// }, [/* new image files here */]);

// Delete a property
// await cmsPropertyStore.deleteProperty("1");
//   location: "Updated Location",
//   type: "Office",
//   bhk: "Commercial",
//   area: "5000 sq ft",
//   bedrooms: 0,
//   bathrooms: 4,
//   description: "Updated description",
//   features: [],
//   created_at: null,
//   updated_at: null,
//   images: []
// }, [/* new image files here */]);

// Delete a property
// await cmsPropertyStore.deleteProperty("1");
//   location: "Updated Location",
//   type: "Office",
//   bhk: "Commercial",
//   area: "5000 sq ft",
//   bedrooms: 0,
//   bathrooms: 4,
//   description: "Updated description",
//   features: [],
//   created_at: null,
//   updated_at: null,
//   images: []
// }, [/* new image files here */]);

// Delete a property
// await cmsPropertyStore.deleteProperty("1");
//   location: "Updated Location",
//   type: "Office",
//   bhk: "Commercial",
//   area: "5000 sq ft",
//   bedrooms: 0,
//   bathrooms: 4,
//   description: "Updated description",
//   features: [],
//   created_at: null,
//   updated_at: null,
//   images: []
// }, [/* new image files here */]);

// Delete a property
// await cmsPropertyStore.deleteProperty("1");
