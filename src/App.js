import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  startNewTimer,
  pauseTimer,
  restoreTimer,
  removeTracker,
} from './redux/trackerAction'
import playImg from './resources/play.png'
import { SingleTimer } from './components/SingleTimer'

import './App.css'

const App = () => {
  const dispatch = useDispatch()

  const timers = useSelector((state) => state.timers)

  const [nameTimers, setNameTimers] = useState('')

  const handleChangeName = (e) => {
    setNameTimers(e.target.value)
  }

  const handleStartNewTimer = () => {
    const time = Date.now()

    dispatch(startNewTimer(time, nameTimers))
    setNameTimers('')
  }

  const handlePause = (timer) => {
    dispatch(pauseTimer(timer))
  }

  const handleStart = (timer) => {
    dispatch(restoreTimer(timer))
  }

  const handleRemove = (timers, id) => {
    dispatch(removeTracker(timers, id))
  }

  console.log('timers', timers)

  return (
    <>
      <h1>tracker</h1>
      <div className='timer'>
        <div className='new-timer'>
          <input
            type='text'
            placeholder='Enter tracker name'
            value={nameTimers}
            onChange={(e) => handleChangeName(e)}
          />
          <button className='new-timer_playbtn' onClick={handleStartNewTimer}>
            <img src={playImg} alt='Start' />
          </button>
        </div>
        <hr />
        <div className='timer-body'>
          {timers.length > 0 &&
            timers.map((t, index) => (
              <SingleTimer
                key={index}
                timer={t}
                allTimers={timers}
                pauseTimer={handlePause}
                restoreTimer={handleStart}
                removeTimer={handleRemove}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default App
