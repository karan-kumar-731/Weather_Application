
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./infoBox.css";
export default function InfoBox({info} ){
    const HOT_URL="https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=1024x1024&w=is&k=20&c=xZ5TYSoESRttplQlPx7uikemlSL6pOc-a9BX-RGSKxg="
    const RAIN_URL="    https://media.istockphoto.com/id/522795232/photo/rain-water-drop-falling-to-the-floor-in-rainy-season.jpg?s=1024x1024&w=is&k=20&c=zdZ4x5CfSbh3vGIZD4OaV_32ezrflc6-w89xP4rwP-M="
    const COLD_URL="https://images.unsplash.com/photo-1562155955-1cb2d73488d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    

    return(
        <div className="info">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.Humidity>80?RAIN_URL: info.temp<30?COLD_URL:HOT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            
         
        {info.city}
          
          
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            
        <p>Temprature ={info.Temprature}&deg;C</p>
        <p>minTemprature ={info.maxTemprature}&deg;C</p>
        <p>maxTemprature ={info.minTemprature}&deg;C</p>
        <p>pressure ={info.Pressure}</p>
        <p>humidity ={info.Humidity}</p>
        <p>feelslike ={info.FeelsLike}&deg;C</p>
            
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    
    
    

    )
}
