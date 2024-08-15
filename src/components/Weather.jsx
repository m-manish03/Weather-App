import React from 'react';
import Searchbox from './Searchbox';
import Info from './Info';
import { useState } from 'react';

const Weather = () => {
  const [climate, setClimate] = useState({
    city: "Hyderabad",
    temp: 27.69,
    tempMin: 36,
    tempMax: 39,
    humidity: 78,
    feelsLike: 21.69,
    weather: "light rain",
  });

  const updateInfo = (result, city) => {
    if (result === null) {
      setErr(true);
    }
    console.log(result);
    setClimate(result);
  }
  return (
    <>
      <Searchbox updateInfo={updateInfo} />
      <Info info={climate} />
    </>
  );
}

export default Weather;