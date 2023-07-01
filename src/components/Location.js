import React from 'react'
const Location = (props) => {
    const {location} = props;

  // let url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${userIP}`;
  // const res = await fetch(url).then(res => res.json()).then(data => setLocation(data)).catch(err => console.log(err));
  //console.log(location, userIP)

  return (
    <div className="mt-3 me-3 ms-3 p-2 w-80 border border-primary-suble text-primary-emphasis bg-primary-subtle rounded d-flex flex-wrap justify-content-between">
      <div>Name : {location.name}</div>{location.region==='' ? '':<div>Region : {location.region}</div>}<div>Country : {location.country}</div><div>Time-Zone = {location.tz_id}</div><div>Local Time : {location.localtime}</div><div>({location.lat}<span>&#176;</span>, {location.lon}<span>&#176;</span>)</div>
    </div>
  )
}

export default Location
