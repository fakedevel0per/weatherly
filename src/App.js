import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import Location from './components/Location';

function App() {
  const ipDataApiKey = process.env.REACT_APP_IPDATA_API_KEY;
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // //DOESNT WORK WITH LOCALHOST
  // // async function getIP(){
  // //   let data = await fetch("https://checkip.amazonaws.com/").then(res=>res.text()).then(data=>console.log(data))
  // // }
  // // getIP();
  // console.log(apikey);

  const [current, setCurrent] = useState({})
  const [inputLocation, setInputLocation] = useState(null)
  const [ipAddress, setIpAddress] = useState(null)

  const IPData = require('ipdata').default;

  const getIP = async()=>{
    const cacheConfig = {
      max: 1000, // max size
      maxAge: 10 * 60 * 1000, // max age in ms (i.e. 10 minutes)
    };
    const ipdata = new IPData(ipDataApiKey, cacheConfig);
    const res = await ipdata.lookup().then(info=>setIpAddress(info.ip));
  }
                    //GET DATA
        const getCurrentData = async() =>{
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${ipAddress}`).then(res=> res.json()).then(data=> setCurrent(data)).catch(err=>console.log(err));
        console.log(current.location.name)
        }

        useEffect(() => {
          getIP();
          getCurrentData();
        }, [])
        
  return (
    <div className="App">
      <Navbar/>
      <Location location={current.location}/>
      <Content current={current.current}/>
      <Footer/>
    </div>
  );
}

export default App;
