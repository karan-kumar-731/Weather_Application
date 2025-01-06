# Weather Application

A simple weather application built with React.js that fetches real-time weather data from an API and displays it to the user. This app allows users to search for the weather in different locations and view details such as temperature, humidity, wind speed, and more.

## Features

- Real-time weather data fetched from an API.
- Search for weather by city.
- Display current weather, temperature, humidity, wind speed, etc.
- Clean and responsive design.



## Technologies Used

- **React.js**: For building the user interface.
- **Axios**: For making HTTP requests to fetch weather data.
- **React Router**: For routing and navigation between pages.
- **Styled Components**: For styling the components using modern CSS-in-JS.
- **OpenWeatherMap API**: To fetch weather data (or any other weather API of your choice).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/karan-kmar-731/Weather_Application.git
   cd Weather_Application

2. **Install dependencies**:

```
npm install
```
3. **Start the application**:
```npm start ```
This will start the application and open it in your default web browser at http://localhost:3000.



**File Structure**
```
/weather-app
  /src
    /components
      - WeatherCard.js
      - SearchBar.js
      - Header.js
    /services
      - weatherService.js
    /styles
      - globalStyles.js
    App.js
    index.js
  .env
  package.json
  README.md
```
