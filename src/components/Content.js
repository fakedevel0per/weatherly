import React from 'react'
import History from './History'
import Current from './Current'
import Forecast from './Forecast'

const Content = () => {
  return (
    <div className="d-flex p-2 justify-content-around">
      <History/>
      <Current/>
      <Forecast/>
    </div>
  )
}

export default Content
