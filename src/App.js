import React, { useEffect, useState } from "react";
import Weather from './components/weather/weather';
import './App.css';

const refresh = () => {
  window.location.reload();
}

export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div id="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div className="loader">
          <div className="lds-ripple"><div></div><div></div></div>
          <div className="warning">Not loading?</div>
          <div className="refresh">
              <button className="refreshBtn" onClick={refresh}>Refresh</button>
          </div>
        </div>
      )}
      
    </div>
  );
};