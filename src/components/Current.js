import React from 'react'

const Current = (props) => {
  const {current} = props;
  return (
    <div className="border border-primary rounded flex-fill flex-wrap m-3">
      <div>Last Updated On : {current.last_updated}</div>
      <div>Temperature : {current.temp_c} / {current.temp_f}</div>
      <div>Condition : {current.condition.text}</div>
      <img src={current.condition.icon}></img>
      <div>Wind Speed : {current.wind_mph} mph, {current.wind_kph} kph</div>
      <div>Wind direction : {current.wind_degree} degrees</div>
    </div>
  )
}

export default Current
