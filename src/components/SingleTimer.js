import React, { useState } from 'react'
import moment from 'moment'
import playImg from '../resources/play.svg'
import pauseImg from '../resources/pause.svg'
import removeImg from '../resources/remove.svg'
import './SingleTimer.css'

export const SingleTimer = ({ timer, pauseTimer, restoreTimer }) => {
  const [time, setTime] = useState(Date.now())

  const renderTimeFromNow = (t) => {
    let fromNow
    console.log(t.current, '1')

    if (t.current !== '') {
      // const dateCurrent = new Date(t.current)

      console.log(t.current, '2')
    } else {
      fromNow = +time - +t.time
    }

    // setTimeout(() => {
    //   setTime(Date.now())
    //   renderTimeFromNow()
    // }, 1000)

    return moment.utc(fromNow).format('HH:mm:ss')
  }

  return (
    <div className='single-timer'>
      <span>{timer.name}</span>
      {timer.status === 'play' && (
        <span id='current-time'>{renderTimeFromNow(timer)}</span>
      )}
      {timer.status === 'pause' && (
        <span id='current-time'>{timer.current}</span>
      )}
      <div>
        {timer.status === 'pause' && (
          <button
            className='single-timer_btn'
            onClick={() => restoreTimer(timer)}
          >
            <img src={playImg} alt='Start' />
          </button>
        )}
        {timer.status === 'play' && (
          <button
            className='single-timer_btn'
            onClick={() => pauseTimer(timer)}
          >
            <img src={pauseImg} alt='Pause' />
          </button>
        )}
        <button className='single-timer_btn'>
          <img src={removeImg} alt='Remove' />
        </button>
      </div>
      <hr />
    </div>
  )
}
