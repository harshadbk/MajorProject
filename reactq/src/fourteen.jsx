import React, { useEffect, useState } from 'react';

const Fourteen = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=303b023ff3175568bb7b0220e8418af0&units=metric`)
          .then((resp) => resp.json())
          .then((data) => {
            setWeather(data);
          })
          .catch((error) => console.error("Error fetching weather data:", error));  // Add error handling
      });
    }
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Current Weather:</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fourteen;
