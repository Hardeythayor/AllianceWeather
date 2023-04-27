import './App.css';
import axios from 'axios'
import CurrentWeather from './components/CurrentWeather';
import { useEffect, useState } from 'react'
import { apiKey, appURL } from './env';
import Forecast from './components/Forecast';

function App() {
  const [weather, setWeather] = useState()

  const fetchWeather = () => {
      axios.get(`${appURL}?key=${apiKey}&q=Lagos&days=14&aqi=no&alerts=no`)
          .then(res => {
              setWeather(res.data)
          })
          .catch(err => {
              console.log(err.response.data.message);
          })
  }

  useEffect(() => {
      fetchWeather()
  }, [])

  return (
    <div className="App">
      {weather && 
        <>
          <CurrentWeather  weather={weather}/>
          <Forecast weather={weather}/>
        </>
      }
    </div>
  );
}

export default App;
