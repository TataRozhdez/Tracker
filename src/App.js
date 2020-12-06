import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { startNewTimer } from './redux/trackerAction'
import playImg from './resources/play.png'
import './App.css'

const App = () => {
  const dispatch = useDispatch()

  const timers = useSelector((state) => state.timers)

  const [nameTimers, setNameTimers] = useState('')

  const handleChangeName = (e) => {
    setNameTimers(e.target.value)
  }

  const handleStartNewTimer = () => {
    const time = moment().format('MM-DD-YYYY HH:mm:ss')

    dispatch(startNewTimer(time, nameTimers))
    setNameTimers('')
  }

  const renderTimers = useCallback(() => {
    if (timers.length > 0) {
      timers.map((timer) => {
        const date = moment(timer.time, 'HH:mm:ss')
        console.log(date)
        const fromNow = moment(timer.time, 'hh:mm:ss').startOf()
        return console.log(fromNow)
      })
    }
  }, [timers])

  useEffect(() => {
    renderTimers()
  }, [renderTimers])

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
        <div className='timer-body'></div>
      </div>
    </>
  )
}

export default App
