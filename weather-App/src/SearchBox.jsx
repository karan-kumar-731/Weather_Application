
import { useState } from "react"
import Button from '@mui/material/Button';
import "./SearchBox.css"
import TextField from '@mui/material/TextField';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("")
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
     const API_KEY="4be78487a7888d144bb2e3b33dd54893"
    let handleChange=(event)=>{
        setCity(event.target.value);
        
    }
    let ChangeApi=async()=>{
        let response=await fetch(`${API_URL}?q=${city} &appid=${API_KEY}&units=metric`)
        let jsonResponse=await response.json()
        console.log(jsonResponse);
        let result={
            city:city,
            
            Temprature:jsonResponse.main.temp,
            minTemprature:jsonResponse.main.temp_min,
            maxTemprature:jsonResponse.main.temp_min,
            Humidity:jsonResponse.main.humidity,
            Pressure:jsonResponse.main.pressure,
            FeelsLike:jsonResponse.main.feels_like
        }
        return result;
    }
    let handleSubmit=async(event)=>{
        event.preventDefault()
       setCity("")
        console.log(city);
        let newInfo=await ChangeApi(); 
        updateInfo(newInfo);
    }
    return (<div className="search">
         <form onSubmit={handleSubmit}>
             <TextField id="outlined-basic" label="City name" variant="outlined" value={city} onChange={handleChange}  />
             <br /><br />
             <Button variant="contained"  type="submit" >serach</Button>
            <h1></h1>
             </form>
    
    </div>)
}