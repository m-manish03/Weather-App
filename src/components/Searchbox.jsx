import React from 'react';
import "../styles/Search.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import icon from '../assets/rain.gif';

const Searchbox = ({ updateInfo }) => {
  const APIurl = "https://api.openweathermap.org/data/2.5/weather";
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState("");
  const [newErr, setNewErr] = useState(false);

  const getWeather = async () => {
    try {
      let response = await fetch(`${APIurl}?q=${city}&appid=${key}&units=metric`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      let jsonRes = await response.json();
      console.log(jsonRes)
      let result = {
        city: jsonRes.name,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };

      return result;
    } catch (error) {
      console.error('Fetch error: ', error);
      return null;
    }
  }

  const HandleSubmit = async (eve) => {
    eve.preventDefault();
    console.log(city);
    let Newres = await getWeather();
    if (Newres) {
      updateInfo(Newres, city);
      setCity("");
      setNewErr(false);
    } else {
      setNewErr(true);
      console.error('Error fetching weather data');
    }
  }

  return (
    <div className='SearchBox'>
      <h2>
        <img src={icon} alt="Sun Icon" style={{ width: '10%', height: '10%', verticalAlign: 'middle', marginRight: '8px' }} />
        Weather App
      </h2>    <form action="" onSubmit={HandleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" type='submit'>Search</Button>
      </form>
      <p style={{ color: "red" }}>{newErr ? "No Such Place Found in the API" : ""}</p>
    </div>
  );

};

export default Searchbox;