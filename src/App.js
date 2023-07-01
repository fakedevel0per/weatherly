import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import Location from './components/Location';

function App() {
  const ipDataApiKey = process.env.REACT_APP_IPDATA_API_KEY;
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [gps, setGps] = useState({latitude: '', longitude: ''});
  const [isGPSon, setIsGPSon] = useState(false);
  const [userIP, setUserIP] = useState('Mumbai')
  const [currentData, setCurrentData] = useState(undefined)

  const IPData = require('ipdata').default;

  const getCurrentData = async() => {

  //  TO GET IP OF USER TO FETCH FIRST RENDER
    const cacheConfig = {
      max: 1000, // max size
      maxAge: 10 * 60 * 1000, // max age in ms (i.e. 10 minutes)
    };
    const ipdata = new IPData(ipDataApiKey, cacheConfig);
    const res = await ipdata.lookup().then(info => setUserIP(info.ip));
    // console.log(userIP);


    // GET RESPONSE FROM WEATHERAPI BASED ON LOCATION BY EITHER GPS OR IP
    let resData;
     if(isGPSon){
      resData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${gps.latitude},${gps.longitude}`).then(res => res.json()).then(data => setCurrentData(data)).catch(err => console.log(err));
     }else{
      resData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${userIP}`).then(res => res.json()).then(data => setCurrentData(data)).catch(err => console.log(err));
     }

    //   setCurrentData({
    //     "location": {
    //         "name": "Thana",
    //         "region": "",
    //         "country": "India",
    //         "lat": 19.2,
    //         "lon": 72.97,
    //         "tz_id": "Asia/Kolkata",
    //         "localtime_epoch": 1688141919,
    //         "localtime": "2023-06-30 21:48"
    //     },
    //     "current": {
    //         "last_updated_epoch": 1688141700,
    //         "last_updated": "2023-06-30 21:45",
    //         "temp_c": 28.0,
    //         "temp_f": 82.4,
    //         "is_day": 0,
    //         "condition": {
    //             "text": "Light rain",
    //             "icon": "//cdn.weatherapi.com/weather/64x64/night/296.png",
    //             "code": 1183
    //         },
    //         "wind_mph": 6.9,
    //         "wind_kph": 11.2,
    //         "wind_degree": 210,
    //         "wind_dir": "SSW",
    //         "pressure_mb": 1007.0,
    //         "pressure_in": 29.74,
    //         "precip_mm": 1.1,
    //         "precip_in": 0.04,
    //         "humidity": 94,
    //         "cloud": 100,
    //         "feelslike_c": 33.0,
    //         "feelslike_f": 91.4,
    //         "vis_km": 2.2,
    //         "vis_miles": 1.0,
    //         "uv": 1.0,
    //         "gust_mph": 30.6,
    //         "gust_kph": 49.3
    //     }
    // })
  console.log(userIP);

}

useEffect(() => {
    // getIP();
    getCurrentData();
  }, [gps, userIP])


  return (
    <div className="App">
      <Navbar setGps={setGps} setIsGPSon={setIsGPSon} />
      {(typeof currentData != 'undefined') ? (<><Location location={currentData.location} /><Content current={currentData.current} /></>) : (
        <div>
          Please Wait .....
       </div>
     )}
      
      <Footer />
    </div>
  );
}

export default App;
