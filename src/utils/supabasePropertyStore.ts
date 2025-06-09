
import { supabase } from "@/integrations/supabase/client";

export interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  bhk: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  created_at?: string;
  updated_at?: string;
  images?: PropertyImage[];
}

export interface PropertyImage {
  id: string;
  property_id: string;
  image_url: string;
  image_order: number;
  created_at?: string;
}

class SupabasePropertyStore {
  private listeners: (() => void)[] = [];
  private properties: Property[] = [];

  constructor() {
    this.setupRealtimeSubscription();
    this.loadProperties();
  }

  private setupRealtimeSubscription() {
    // Subscribe to real-time changes
    const channel = supabase
      .channel('properties-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'properties'
        },
        () => {
          this.loadProperties();
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'property_images'
        },
        () => {
          this.loadProperties();
        }
      )
      .subscribe();
  }

  private async loadProperties() {
    try {
      const { data: properties, error } = await supabase
        .from('properties')
        .select(`
          *,
          property_images (
            id,
            image_url,
            image_order
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading properties:', error);
        return;
      }

      this.properties = properties.map(prop => ({
        ...prop,
        images: prop.property_images || []
      }));
      
      this.notifyListeners();
    } catch (error) {
      console.error('Error loading properties:', error);
    }
  }

  getProperties(): Property[] {
    return [...this.properties];
  }

  async addProperty(property: Omit<Property, 'id'>, imageFiles: File[] = []): Promise<void> {
    try {
      // Insert property
      const { data: newProperty, error: propertyError } = await supabase
        .from('properties')
        .insert({
          title: property.title,
          location: property.location,
          type: property.type,
          bhk: property.bhk,
          area: property.area,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          description: property.description,
          features: property.features
        })
        .select()
        .single();

      if (propertyError) {
        console.error('Error adding property:', propertyError);
        throw propertyError;
      }

      // Upload images if provided
      if (imageFiles.length > 0) {
        await this.uploadPropertyImages(newProperty.id, imageFiles);
      }

      await this.loadProperties();
    } catch (error) {
      console.error('Error adding property:', error);
      throw error;
    }
  }

  async updateProperty(id: string, property: Omit<Property, 'id'>, imageFiles: File[] = []): Promise<void> {
    try {
      const { error: propertyError } = await supabase
        .from('properties')
        .update({
          title: property.title,
          location: property.location,
          type: property.type,
          bhk: property.bhk,
          area: property.area,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          description: property.description,
          features: property.features,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (propertyError) {
        console.error('Error updating property:', propertyError);
        throw propertyError;
      }

      // Upload new images if provided
      if (imageFiles.length > 0) {
        await this.uploadPropertyImages(id, imageFiles);
      }

      await this.loadProperties();
    } catch (error) {
      console.error('Error updating property:', error);
      throw error;
    }
  }

  async deleteProperty(id: string): Promise<void> {
    try {
      // Delete associated images from storage
      const { data: images } = await supabase
        .from('property_images')
        .select('image_url')
        .eq('property_id', id);

      if (images) {
        for (const image of images) {
          const fileName = image.image_url.split('/').pop();
          if (fileName) {
            await supabase.storage
              .from('property-images')
              .remove([fileName]);
          }
        }
      }

      // Delete property (images will be deleted automatically due to CASCADE)
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting property:', error);
        throw error;
      }

      await this.loadProperties();
    } catch (error) {
      console.error('Error deleting property:', error);
      throw error;
    }
  }

  private async uploadPropertyImages(propertyId: string, files: File[]): Promise<void> {
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = `${propertyId}_${Date.now()}_${i}.${file.name.split('.').pop()}`;

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from('property-images')
          .upload(fileName, file);

        if (uploadError) {
          console.error('Error uploading image:', uploadError);
          continue;
        }

        // Get public URL
        const { data } = supabase.storage
          .from('property-images')
          .getPublicUrl(fileName);

        // Save image record
        await supabase
          .from('property_images')
          .insert({
            property_id: propertyId,
            image_url: data.publicUrl,
            image_order: i
          });
      }
    } catch (error) {
      console.error('Error uploading property images:', error);
    }
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

export const supabasePropertyStore = new SupabasePropertyStore();
