import React, { useState } from 'react'
import moment from 'moment'
import playImg from '../resources/play.svg'
import pauseImg from '../resources/pause.svg'
import removeImg from '../resources/remove.svg'
import './SingleTimer.css'

export const SingleTimer = ({
  timer,
  allTimers,
  removeTimer,
  pauseTimer,
  restoreTimer,
}) => {
  const [time, setTime] = useState(Date.now())

  const renderTimeFromNow = (t) => {
    setTimeout(() => {
      setTime(Date.now())
    }, 1000)

    return `${moment.utc(+time - +t.time).format('HH:mm:ss')}`
  }

  return (
    <div
      className={timer.status === 'play' ? 'single-timer play' : 'single-timer'}
    >
      <span>{timer.name}</span>
      {timer.status === 'play' && timer.current === null && (
        <span id='current-time'>{renderTimeFromNow(timer)}</span>
      )}
      {timer.status === 'pause' && timer.current !== null && (
        <span id='current-time'>
          {moment.utc(+timer.current).format('HH:mm:ss')}
        </span>
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
        <button
          className='single-timer_btn'
          onClick={() => {
            removeTimer(allTimers, timer.id)
          }}
        >
          <img src={removeImg} alt='Remove' />
        </button>
      </div>
      <hr />
    </div>
  )
}
