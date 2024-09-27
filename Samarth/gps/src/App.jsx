import { useState, useEffect } from "react";
import "./App.css";

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const geo = navigator.geolocation;

  const users = [
    { name: "Mumbai", lat: 19.0760, lon: 72.8777 }, // Mumbai
    { name: "Nashik", lat: 18.5204, lon: 73.8567 }, // Nashik
    { name: "Borivali", lat: 19.2183, lon: 72.9781 }, // Borivali (close to Mumbai)
    { name: "Navi Mumbai", lat: 19.0330, lon: 73.0297 }, // Navi Mumbai
    { name: "Nagpur", lat: 20.5937, lon: 78.9629 }, // (Nagpur)
  ];


  useEffect(() => {
    geo.getCurrentPosition(userCoords);
  }, []);

  function userCoords(position) {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;
    setLatitude(userLatitude);
    setLongitude(userLongitude);
    findNearbyUsers(userLatitude, userLongitude);
  }


  function findNearbyUsers(userLat, userLon) {
    const maxDistance = 5; // 20 kilometers
    const nearby = users.filter((user) => {
      const distance = getDistance(userLat, userLon, user.lat, user.lon);
      return distance <= maxDistance;
    });
    setNearbyUsers(nearby);
  }

  return (
    <div className="App">
      <h1>Your Current Location</h1>
      <h2>Latitude: {latitude}</h2>
      <h2>Longitude: {longitude}</h2>

      <h1>Nearby Users (within 20 km)</h1>
      {nearbyUsers.length > 0 ? (
        nearbyUsers.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>
              Latitude: {user.lat}, Longitude: {user.lon}
            </p>
          </div>
        ))
      ) : (
        <p>No users found within 20 km range.</p>
      )}
    </div>
  );
}

export default App;