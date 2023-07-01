import React from 'react'
import History from './History'
import Current from './Current'
import Forecast from './Forecast'

const Content = (props) => {

  return (
    <div className="d-flex p-2 justify-content-around">
      <History/>
      <Current current={props.current} />
      <Forecast/>
    </div>
  )
}

export default Content
