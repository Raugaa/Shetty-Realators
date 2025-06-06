
// Simple property store to share data between admin and normal properties pages
export interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  bhk: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  features: string[];
  description: string;
}

// Initial properties data
const initialProperties: Property[] = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Bandra West, Mumbai",
    type: "Apartment",
    bhk: "3BHK",
    area: "1450 sq ft",
    bedrooms: 3,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Sea View", "Parking", "Garden", "Gym"],
    description: "Stunning 3BHK apartment with panoramic sea views in prime Bandra location."
  },
  {
    id: 2,
    title: "Premium Villa",
    location: "Juhu, Mumbai",
    type: "Villa",
    bhk: "4BHK",
    area: "3200 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Sea View", "Parking", "Garden", "Pool"],
    description: "Luxurious villa with private garden and swimming pool in prestigious Juhu area."
  },
  {
    id: 3,
    title: "Modern 2BHK Flat",
    location: "Andheri East, Mumbai",
    type: "Apartment",
    bhk: "2BHK",
    area: "980 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Parking", "Gym", "Security"],
    description: "Well-designed 2BHK flat with modern amenities and excellent connectivity."
  }
];

// Property store with event listeners for real-time updates
class PropertyStore {
  private properties: Property[] = [...initialProperties];
  private listeners: (() => void)[] = [];

  getProperties(): Property[] {
    return [...this.properties];
  }

  addProperty(property: Omit<Property, 'id'>): void {
    const newProperty = {
      ...property,
      id: Math.max(...this.properties.map(p => p.id), 0) + 1
    };
    this.properties.push(newProperty);
    this.notifyListeners();
  }

  updateProperty(id: number, updatedProperty: Omit<Property, 'id'>): void {
    const index = this.properties.findIndex(p => p.id === id);
    if (index !== -1) {
      this.properties[index] = { ...updatedProperty, id };
      this.notifyListeners();
    }
  }

  deleteProperty(id: number): void {
    this.properties = this.properties.filter(p => p.id !== id);
    this.notifyListeners();
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }
}

export const propertyStore = new PropertyStore();
