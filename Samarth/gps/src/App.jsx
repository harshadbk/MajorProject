/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [userAddress, setUserAddres] = useState();
  const [userCity, setUserCity] = useState();

  //Get realtime gps of user
  const [GPSLatitude, setGPSLatitude] = useState();
  const [GPSLongitude, setGPSLongitude] = useState();
  const geo = navigator.geolocation;

  //get User Current Location
  geo.getCurrentPosition(userCoords);
  function userCoords(position) {
    let userLatitude = position.coords.latitude;
    let userLongitude = position.coords.longitude;
    // console.log("Latitude : ", userLatitude);
    // console.log("Longitude : ", userLongitude);
    setLatitude(userLatitude);
    setLongitude(userLongitude);
  }
  const getUserAddress = async () => {
    let url = `https://api.opencagedata.com/geocode/v1/json?key=627c8f09c8f64c1aaa088b6a0b92284e&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`;
    const loc = await fetch(url);
    const data = await loc.json();
    // console.log("User Address : ", data);
    setUserAddres(data.results[0].formatted);
    setUserCity(data.results[0].components.city);
  };
  const handleGetUserAddress = async () => {
    await getUserAddress();
  };

  //get User GPS Current Location
  geo.watchPosition(userGPScoords);
  function userGPScoords(position) {
    let userGPSLatitude = position.coords.latitude;
    let userGPSLongitude = position.coords.longitude;
    console.log("Latitude : ", userGPSLatitude);
    console.log("Longitude : ", userGPSLongitude);
    setGPSLatitude(userGPSLatitude);
    setGPSLongitude(userGPSLongitude);
  }
  return (
    <>
      <h1>Current Location </h1>
      <h2>Latitude- {latitude}</h2>
      <h2>longitude- {longitude}</h2>
      <h2>User Address - {userAddress}</h2>
      <h2>City - {userCity}</h2>
      <button onClick={handleGetUserAddress}>Get User Address</button>
      <hr />
      <h1>GPS Tracking</h1>
      <h2>Latitude : - {GPSLatitude}</h2>
      <h2>Latitude : - {GPSLongitude}</h2>
    </>
  );
}

export default App;
