
import React, { useEffect, useRef, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = async () => {
    if (!mapboxToken || !mapContainer.current) return;

    try {
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.default.accessToken = mapboxToken;
      
      const map = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-74.5, 40],
        zoom: 9,
        pitch: 45,
      });

      // Add navigation controls
      map.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      // Add a marker for the office location
      new mapboxgl.default.Marker({
        color: '#3b82f6'
      })
      .setLngLat([-74.5, 40])
      .setPopup(
        new mapboxgl.default.Popup({ offset: 25 })
        .setHTML('<h3>Sudhir Realtors Office</h3><p>123 Real Estate Avenue</p>')
      )
      .addTo(map);

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error loading map:', error);
    }
  };

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden glass-effect border border-white/20">
      {showTokenInput ? (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <MapPin className="w-16 h-16 text-blue-400 mb-6 animate-float" />
          <h3 className="text-xl font-semibold text-white mb-4">Interactive Map</h3>
          <p className="text-white/70 mb-6 max-w-md">
            Enter your Mapbox public token to view our office location and get directions.
          </p>
          <div className="flex gap-4 w-full max-w-md">
            <Input
              type="text"
              placeholder="Enter Mapbox public token..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-white/50"
            />
            <Button 
              onClick={initializeMap}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              Load Map
            </Button>
          </div>
          <p className="text-xs text-white/50 mt-4">
            Get your token at{' '}
            <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              mapbox.com
            </a>
          </p>
        </div>
      ) : (
        <div ref={mapContainer} className="w-full h-full" />
      )}
    </div>
  );
};

export default Map;
