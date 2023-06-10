import React from 'react'
const Location = (props) => {
    const {location} = props
  return (
    <div className="mt-3 me-3 ms-3 p-2 w-80 border border-primary rounded">
      Name : {location.name} Region : {location.region} Country : {location.country} Time-Zone = {location.tz_id} Local Time : {location.localtime} ({location.lat}, {location.lon})
    </div>
  )
}

export default Location
