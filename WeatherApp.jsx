import React from 'react'
import '/WeatherApp.css';
import search_icons from '/search.png';
import cloud_icons from '/cloud.png';
import clear_icons from '/clear.png';
import drizzel_icons from '/drizzle.png';
import humadity_icons from '/humidity.png';
import snow_icons from '/snow.png';
import rain_icon from '/rain.png';
import wind_icons from '/wind.png';
import { useState } from 'react';
const WeatherApp = () => {

  let api_key = "a02044c301dadc652567ce9594cc08b3";
  const [wicon,setIcon]=useState(clear_icons);

  const search= async()=>{
    const element=document.getElementsByClassName("cityInput");
    if(element[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value},india&units=Metric&appid=${api_key}`;
    let response=await fetch(url);
    let data=await response.json();
const humidity=document.getElementsByClassName("humidity-contain");
const wind=document.getElementsByClassName("wind-rate");
const temp=document.getElementsByClassName("weather-temp");
const location=document.getElementsByClassName("waether-location");

humidity[0].innerHTML=data.main.humidity+"%";
wind[0].innerHTML=data.wind.speed+"km/h";
temp[0].innerHTML= Math.floor(data.main.temp)+"°C";
location[0].innerHTML=data.name;

if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
  setIcon(clear_icons);
}
else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
  setIcon(cloud_icons);
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
  setIcon(drizzel_icons);
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
  setIcon(drizzel_icons);
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
setIcon(rain_icon);
}
else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
  setIcon(cloud_icons);
}
else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
  setIcon(snow_icons);
}

  }
  return (
    <div className='container'>
     <div className="top-bar">
      <input type="text" className="cityInput" placeholder='Search'/>
      <div className="search-icon" onClick={()=>{search()}}>
        <img src={search_icons} alt="" />
      </div>
     </div>
     <div className="weather-image">
      <img src={wicon} alt="" />
     </div>
     <div className="weather-temp">24 °C</div>
     <div className="waether-location">London</div>
     <div className="data-container">
      <div className="element">
        <img src={humadity_icons} alt="" className="icon" />
        <div className="data">
          <div className="humidity-contain">64%</div>
          <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={wind_icons} alt="" className="icon" />
        <div className="data">
          <div className="wind-rate">15km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
     </div>
     {/* <div className="cover">

     </div> */}
    </div>
  
  )
}

export default WeatherApp
