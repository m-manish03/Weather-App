import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../styles/info.css";
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import rainy from '../assets/rainy.jpg';
import sunny from '../assets/sunny.jpg';
import icy from '../assets/icy.jpg';
import normal from '../assets/normal.jpg';

/**
 * A React component that displays weather information in a card format.
 *
 * @param {Object} info - An object containing weather information.
 * @param {string} info.city - The city name.
 * @param {number} info.temp - The current temperature.
 * @param {number} info.tempMin - The minimum temperature.
 * @param {number} info.tempMax - The maximum temperature.
 * @param {number} info.humidity - The humidity level.
 * @param {string} info.weather - A description of the weather.
 * @param {number} info.feelsLike - The temperature it feels like.
 * @return {JSX.Element} A JSX element representing the weather card.
 */
const Info = ({ info }) => {
  console.log(info)
  return (
    <div>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image={info.humidity > 80 ? rainy : info.temp > 30 ? sunny : info.temp < 17 ? icy : normal}
              alt="weather image"
            />
            <CardContent>
              <div className="cardHeader">
                <Typography gutterBottom variant="h5" component="div">
                  {info.city}
                </Typography>
                <div className="iconContainer">
                  {info.humidity > 80 ? <ThunderstormOutlinedIcon /> : info.temp < 22 ? <AcUnitOutlinedIcon /> : <WbSunnyOutlinedIcon />}
                </div>
              </div>
              <Typography variant="body2" color="text.secondary">
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The Weather can be Described as {info.weather} and it Feels like {info.feelsLike}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  )
}

export default Info;