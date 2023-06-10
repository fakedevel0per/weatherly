import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import Location from './components/Location';

function App() {
  // const apikey = process.env.REACT_APP_IPDATA_API_KEY;
  
  // //DOESNT WORK WITH LOCALHOST
  // // async function getIP(){
  // //   let data = await fetch("https://checkip.amazonaws.com/").then(res=>res.text()).then(data=>console.log(data))
  // // }
  // // getIP();
  // console.log(apikey);
  var defaultData={};
  const [current, setCurrent] = useState({})
  const [inputLocation, setInputLocation] = useState(null)

  // const IPData = require('ipdata').default;
  // var userIP;
  // const cacheConfig = {
  //   max: 1000, // max size
  //   maxAge: 10 * 60 * 1000, // max age in ms (i.e. 10 minutes)
  // };
  // const ipdata = new IPData('ef71ac7d6f1983797c444931ab9246c7b86eecf134c15b0ed93bc8c6', cacheConfig);
  // ipdata.lookup()
  // .then(function(info) {
  //   userIP = info.ip;
  // });
                     //GET DATA
        const getCurrentData = async() =>{
          const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=d4171a20a12f4b98a82171452230906&q=mumbai`).then(res=> res.json()).then(data=> setCurrent(data)).catch(err=>console.log(err));
        console.log(current.location.name)
        }
        //   try{
        //     const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=d4171a20a12f4b98a82171452230906&q=Mumbai`);
        //     const data = res.json();
        //     setCurrent(data.location);
        //     console.log(current);
        //   }catch(err){
        //     console.log(err)
        //   }
        // }

        useEffect(() => {
          getCurrentData();
        }, [inputLocation])
        
  return (
    <div className="App">
      <Navbar/>
      <Location/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
