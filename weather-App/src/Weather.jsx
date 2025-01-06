


import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./Weather.css";


export default function Weather(){
    const [weatherInfo, setWeatherInfo]=useState({
          city:"City",
        temprature:"0",
        minTemprature:"0",
        maxTemprature:"0",
        pressure:"0" ,
        humidity:"0",
        feelslike:"0",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
 return(
        <div className="weather">
        <h1> Weather App</h1>
        <h2>Search for weather information</h2>
        <SearchBox  updateInfo={updateInfo} />
        <InfoBox info={weatherInfo}/>
        </div>
      
    )
}

