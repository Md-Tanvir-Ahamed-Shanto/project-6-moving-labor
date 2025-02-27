/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { Piano, Plus, Minus, Calendar } from "lucide-react";

const libraries = ["places"];
const googleMapsApiKey = "AIzaSyDRYczTDT6kSz-bWGrLGh6WCaBgUSL-1Dk";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [fromFloor, setFromFloor] = useState("Ground Floor");
  const [toFloor, setToFloor] = useState("Ground Floor");
  const [hasLift, setHasLift] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [items, setItems] = useState({
    digitalPiano: 0,
    uprightPiano: 0,
    grandPiano: 0,
    babyGrandPiano: 0,
    concertPiano: 0,
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const floorOptions = [
    "Ground Floor",
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
    "4th Floor",
    "5th Floor",
    "6th Floor",
  ];

  const handleItemChange = (itemType, increment) => {
    setItems((prev) => ({
      ...prev,
      [itemType]: Math.max(0, prev[itemType] + (increment ? 1 : -1)),
    }));
  };

  const [fromAutocomplete, setFromAutocomplete] = useState(null);
  const [toAutocomplete, setToAutocomplete] = useState(null);
  const [distance, setDistance] = useState(null);
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      setDirectionsService(new window.google.maps.DirectionsService());
      const renderer = new window.google.maps.DirectionsRenderer();
      setDirectionsRenderer(renderer);
      if (map) {
        renderer.setMap(map);
      }
    }
  }, [isLoaded, map]);

  useEffect(() => {
    if (fromLocation && toLocation && directionsService && directionsRenderer) {
      calculateRoute();
    }
  }, [fromLocation, toLocation]);

  const calculateRoute = () => {
    if (!fromLocation || !toLocation) return;

    const request = {
      origin: fromLocation,
      destination: toLocation,
      travelMode: 'DRIVING'
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
        setDistance(result.routes[0].legs[0].distance.text);
      }
    });
  };

  const onFromPlaceSelected = () => {
    if (fromAutocomplete) {
      const place = fromAutocomplete.getPlace();
      setFromLocation(place.formatted_address || "");
    }
  };

  const onToPlaceSelected = () => {
    if (toAutocomplete) {
      const place = toAutocomplete.getPlace();
      setToLocation(place.formatted_address || "");
    }
  };

  const renderLocationStep = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Select Locations</h2>
      <div className="space-y-4">
        {/* From Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From Location
          </label>
          <Autocomplete
            onLoad={(autocomplete) => setFromAutocomplete(autocomplete)}
            onPlaceChanged={onFromPlaceSelected}
          >
            <input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter pickup location"
            />
          </Autocomplete>
          <div className="mt-2">
            <select
              value={fromFloor}
              onChange={(e) => setFromFloor(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              {floorOptions.map((floor) => (
                <option key={floor} value={floor}>
                  {floor}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={hasLift}
                onChange={(e) => setHasLift(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span className="text-sm text-gray-600">Lift Available</span>
            </label>
          </div>
        </div>

        {/* To Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To Location
          </label>
          <Autocomplete
            onLoad={(autocomplete) => setToAutocomplete(autocomplete)}
            onPlaceChanged={onToPlaceSelected}
          >
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter delivery location"
            />
          </Autocomplete>
          <div className="mt-2">
            <select
              value={toFloor}
              onChange={(e) => setToFloor(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              {floorOptions.map((floor) => (
                <option key={floor} value={floor}>
                  {floor}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Map and Distance Display */}
        {isLoaded && (
          <div className="mt-4">
            <div className="h-64 w-full rounded-lg overflow-hidden">
              <div id="map" className="h-full w-full" ref={(element) => {
                if (element && !map) {
                  const newMap = new window.google.maps.Map(element, {
                    zoom: 7,
                    center: { lat: 54.5, lng: -2 }, // Center of UK
                  });
                  setMap(newMap);
                  if (directionsRenderer) {
                    directionsRenderer.setMap(newMap);
                  }
                }
              }} />
            </div>
            {distance && (
              <div className="mt-2 p-2 bg-blue-50 rounded-md">
                <p className="text-blue-800">Distance: {distance}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderItemsStep = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Select Items</h2>
      <div className="space-y-4">
        {Object.entries(items).map(([itemType, count]) => (
          <div
            key={itemType}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <Piano className="w-6 h-6 text-gray-600" />
              <span className="text-gray-800">
                {itemType.replace(/([A-Z])/g, " $1").trim()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleItemChange(itemType, false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus className="w-5 h-5 text-gray-600" />
              </button>
              <span className="w-8 text-center">{count}</span>
              <button
                onClick={() => handleItemChange(itemType, true)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDateStep = () => {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

      days.push(
        <div
          key={i}
          className={`p-2 border rounded-lg ${isSelected ? "bg-blue-600 text-white" : ""} ${
            isPast ? "text-gray-400 cursor-not-allowed" : "hover:bg-blue-50 cursor-pointer"
          }`}
          onClick={() => !isPast && setSelectedDate(date)}
        >
          <div className="text-center">{i}</div>
          {!isPast && (
            <div className="text-xs text-center mt-1">
              £{Math.floor(Math.random() * 50) + 150}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Select Date</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">
              {today.toLocaleString("default", { month: "long", year: "numeric" })}
            </h3>
            <div className="flex space-x-2">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-600">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">{days}</div>
        </div>
        {selectedDate && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              Selected Date: {selectedDate.toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderSummaryStep = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Booking Summary</h2>
      <div className="space-y-4 p-6 border rounded-lg bg-gray-50">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-700">From</h3>
            <p className="text-gray-600">{fromLocation}</p>
            <p className="text-sm text-gray-500">{fromFloor}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">To</h3>
            <p className="text-gray-600">{toLocation}</p>
            <p className="text-sm text-gray-500">{toFloor}</p>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-2">Selected Items</h3>
          {Object.entries(items)
            .filter(([_, count]) => count > 0)
            .map(([itemType, count]) => (
              <div
                key={itemType}
                className="flex justify-between text-gray-600 text-sm"
              >
                <span>{itemType.replace(/([A-Z])/g, " $1").trim()}</span>
                <span>x{count}</span>
              </div>
            ))}
        </div>

        <div>
          <h3 className="font-medium text-gray-700">Moving Date</h3>
          <p className="text-gray-600">
            {selectedDate?.toLocaleDateString() || "Not selected"}
          </p>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return renderLocationStep();
      case 2:
        return renderItemsStep();
      case 3:
        return renderDateStep();
      case 4:
        return renderSummaryStep();
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex items-center ${stepNumber !== 4 ? "flex-1" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
              >
                {stepNumber}
              </div>
              {stepNumber !== 4 && (
                <div
                  className={`flex-1 h-1 mx-2 ${step > stepNumber ? "bg-blue-600" : "bg-gray-200"}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {renderStepContent()}

      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
          >
            Back
          </button>
        )}
        {step < 4 && (
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ml-auto"
          >
            Next
          </button>
        )}
        {step === 4 && (
          <button
            onClick={() => console.log("Submit booking")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ml-auto"
          >
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingPage;