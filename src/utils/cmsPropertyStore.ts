
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
  images: string[];
  created_at?: string;
}

// Static property data - in a real CMS this would come from your content management system
const staticProperties: Property[] = [
  {
    id: "1",
    title: "Premium Office Space - Baner",
    location: "Baner, Pune",
    type: "Office",
    bhk: "Commercial",
    area: "5000 sq ft",
    bedrooms: 0,
    bathrooms: 4,
    description: "Premium office space in the heart of Baner IT corridor. Perfect for tech companies with modern amenities and excellent connectivity.",
    features: ["Parking", "Power Backup", "Security", "Elevator", "Conference Room"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
    ],
    created_at: "2024-01-15"
  },
  {
    id: "2",
    title: "Retail Space - FC Road",
    location: "FC Road, Pune",
    type: "Retail",
    bhk: "Commercial",
    area: "1200 sq ft",
    bedrooms: 0,
    bathrooms: 2,
    description: "Prime retail location on FC Road with high footfall. Ideal for fashion, electronics, or food businesses.",
    features: ["Street Facing", "Parking", "Security", "High Footfall"],
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    ],
    created_at: "2024-01-10"
  },
  {
    id: "3",
    title: "Corporate Headquarters - Hinjewadi",
    location: "Hinjewadi Phase 1, Pune",
    type: "Office",
    bhk: "Commercial",
    area: "15000 sq ft",
    bedrooms: 0,
    bathrooms: 8,
    description: "Large corporate space suitable for IT companies and multinational corporations. Modern infrastructure with dedicated parking.",
    features: ["Parking", "Cafeteria", "Power Backup", "Security", "Elevator", "Conference Rooms"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
    ],
    created_at: "2024-01-05"
  },
  {
    id: "4",
    title: "Bank Branch Space - Koregaon Park",
    location: "Koregaon Park, Pune",
    type: "Bank Branch",
    bhk: "Commercial",
    area: "2500 sq ft",
    bedrooms: 0,
    bathrooms: 3,
    description: "Ground floor space perfect for bank branch with vault facility and customer parking. Prime location with excellent visibility.",
    features: ["Ground Floor", "Vault Ready", "Parking", "Security", "Customer Area"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    ],
    created_at: "2024-01-01"
  },
  {
    id: "5",
    title: "Co-working Space - Viman Nagar",
    location: "Viman Nagar, Pune",
    type: "Co-working",
    bhk: "Commercial",
    area: "8000 sq ft",
    bedrooms: 0,
    bathrooms: 6,
    description: "Modern co-working facility with flexible desk arrangements, meeting rooms, and recreational areas. Perfect for startups and freelancers.",
    features: ["Flexible Seating", "Meeting Rooms", "Cafeteria", "Wi-Fi", "Parking", "Recreation Area"],
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=800&q=80"
    ],
    created_at: "2023-12-28"
  },
  {
    id: "6",
    title: "Warehouse - Chakan",
    location: "Chakan, Pune",
    type: "Warehouse",
    bhk: "Commercial",
    area: "25000 sq ft",
    bedrooms: 0,
    bathrooms: 4,
    description: "Large warehouse facility with loading docks, office space, and security. Ideal for logistics and manufacturing companies.",
    features: ["Loading Dock", "Office Space", "Security", "Parking", "24/7 Access"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    ],
    created_at: "2023-12-25"
  }
];

class CMSPropertyStore {
  private properties: Property[] = [...staticProperties];
  private listeners: (() => void)[] = [];

  getProperties(): Property[] {
    return [...this.properties];
  }

  getPropertyById(id: string): Property | undefined {
    return this.properties.find(property => property.id === id);
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

export const cmsPropertyStore = new CMSPropertyStore();
