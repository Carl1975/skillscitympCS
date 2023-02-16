import { useEffect, useState } from "react";
import LocationItem from "./location-item";
/* API request used instead */
/* import albums from "./albums"; */

export default function LocationGrid() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await fetch(`/api/locations`);
    const data = await response.json();
    setLocations(data);
  }

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {locations.map((location, index) => (
        <LocationItem Key={index} location={location} />

      ))}
    </div>
  )
} 