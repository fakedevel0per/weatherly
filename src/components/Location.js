import React from 'react'
const Location = (props) => {
    const {location} = props
  return (
    <div className="mt-3 me-3 ms-3 p-2 w-80 border border-primary-suble text-primary-emphasis bg-primary-subtle rounded d-flex flex-wrap justify-content-between">
      {/* <div>Name : {location.name}</div><div>Region : {location.region}</div><div>Country : {location.country}</div><div>Time-Zone = {location.tz_id}</div><div>Local Time : {location.localtime}</div><div>({location.lat}<span>&#176;</span>, {location.lon}<span>&#176;</span>)</div> */}
    </div>
  )
}

export default Location
