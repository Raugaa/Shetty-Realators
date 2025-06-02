
import React, { useEffect, useRef, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(true);

  const loadGoogleMapsScript = (apiKey: string) => {
    if (window.google) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    window.initMap = initializeMap;
    
    document.head.appendChild(script);
  };

  const initializeMap = async () => {
    if (!mapContainer.current || !window.google) return;

    const { Map } = window.google.maps;
    const { Autocomplete } = window.google.maps.places;
    const { AdvancedMarkerElement } = window.google.maps.marker || {};

    const mapOptions = {
      center: { lat: 18.5204, lng: 73.8567 }, // Pune, Maharashtra coordinates
      zoom: 12,
      mapId: "sudhir-realtors-map"
    };

    const map = new Map(mapContainer.current, mapOptions);

    // Add marker for office location
    if (AdvancedMarkerElement) {
      const marker = new AdvancedMarkerElement({
        map,
        position: mapOptions.center,
        title: "Sudhir Realtors Office"
      });
    } else {
      // Fallback to regular marker
      const marker = new window.google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: "Sudhir Realtors Office"
      });
    }

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 10px 0; color: #333;">Sudhir Realtors</h3>
          <p style="margin: 0; color: #666;">123 Real Estate Avenue<br>Pune, Maharashtra 400001</p>
          <p style="margin: 5px 0 0 0; color: #666;">Phone: 9422005110</p>
        </div>
      `
    });

    // Show info window on marker click
    const marker = new window.google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: "Sudhir Realtors Office"
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    setIsMapLoaded(true);
    setShowApiInput(false);
  };

  const handleLoadMap = () => {
    if (apiKey.trim()) {
      loadGoogleMapsScript(apiKey.trim());
    }
  };

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
      {showApiInput ? (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white dark:bg-gray-800">
          <MapPin className="w-16 h-16 text-blue-500 mb-6 animate-float" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interactive Google Map</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            Enter your Google Maps API key to view our office location and get directions.
          </p>
          <div className="flex gap-4 w-full max-w-md">
            <Input
              type="text"
              placeholder="Enter Google Maps API key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <Button 
              onClick={handleLoadMap}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              Load Map
            </Button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Get your free API key at{' '}
            <a href="https://developers.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              Google Cloud Console
            </a>
          </p>
        </div>
      ) : (
        <div ref={mapContainer} className="w-full h-full" />
      )}
    </div>
  );
};

export default GoogleMap;
