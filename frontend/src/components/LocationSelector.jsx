import { useState } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key

const LocationSelector = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [fromAutocomplete, setFromAutocomplete] = useState(null);
  const [toAutocomplete, setToAutocomplete] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  // Handle "From" place selection
  const onFromPlaceSelected = () => {
    if (fromAutocomplete) {
      const place = fromAutocomplete.getPlace();
      setFromLocation(place.formatted_address || "");
    }
  };

  // Handle "To" place selection
  const onToPlaceSelected = () => {
    if (toAutocomplete) {
      const place = toAutocomplete.getPlace();
      setToLocation(place.formatted_address || "");
    }
  };

  return (
    <div>
      <h2>Select From and To Locations (Restricted to US)</h2>

      {/* From Location */}
      <Autocomplete
        onLoad={(autocomplete) => setFromAutocomplete(autocomplete)}
        onPlaceChanged={onFromPlaceSelected}
        options={{ componentRestrictions: { country: "us" } }} // Restrict to US
      >
        <input
          type="text"
          placeholder="Enter From Location"
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
          style={{ width: "300px", padding: "10px", fontSize: "16px", marginBottom: "10px" }}
        />
      </Autocomplete>

      {/* To Location */}
      <Autocomplete
        onLoad={(autocomplete) => setToAutocomplete(autocomplete)}
        onPlaceChanged={onToPlaceSelected}
        options={{ componentRestrictions: { country: "us" } }} // Restrict to US
      >
        <input
          type="text"
          placeholder="Enter To Location"
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
          style={{ width: "300px", padding: "10px", fontSize: "16px", marginBottom: "10px" }}
        />
      </Autocomplete>

      <div style={{ marginTop: "20px" }}>
        <h3>Selected Locations:</h3>
        <p>From: {fromLocation}</p>
        <p>To: {toLocation}</p>
      </div>
    </div>
  );
};

export default LocationSelector;
