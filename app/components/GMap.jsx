"use client"
import { useState } from 'react';

const GainforestMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const mapUrl = "https://maps.gainforest.app/b434425187592ac24d9c9f6dc0a1410dc4948c35385b5546bb9cda1cf119c8cd";
  
  return (
    <div className="relative w-full h-96 bg-gray-100">
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-gray-700">
          <div className="flex items-center justify-center">
            <svg className="animate-spin h-8 w-8 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Loading map...</span>
          </div>
        </div>
      )}
      
      <iframe 
        src={mapUrl}
        title="Gainforest Map"
        className="w-full h-full border-none"
        onLoad={() => setIsLoading(false)}
        allowFullScreen
      />
    </div>
  );
};

export default GainforestMap;