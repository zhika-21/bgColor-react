import React, {useEffect,useRef, useState} from 'react'
import "./App.css"

function App() {
  const[timerDays,setTimerDays] = useState("00");
  const[timerHours,setTimerHours] = useState("00");
  const[timerMinutes,setTimerMinutes] = useState("00");
  const[timerSeconds,setSeconds] = useState("00");

  let interval =useRef();

  const startTimer=()=>{
    const countdownDate = new Date("May 8, 2022 00:00:00").getTime()

    interval = setInterval(()=>{
      const now = new Date().getTime();

      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 *60*60*24));
      const hours= Math.floor(distance % (1000 *60*60*24) / (1000*60*60));
      const minutes = Math.floor((distance % (1000 *60*60))/(1000*60));
      const seconds = Math.floor((distance % (1000 *60))/1000);

      if(distance<0){
        //stop our time
       
      }else{
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setSeconds(seconds);
      }
    },1000);
  }
  useEffect(()=>{
    startTimer();
    return()=>{
      clearInterval(interval.current)

    }
  })
  
  return (
  <section className="timer-container">
    <section className="timer">
      <div className='lala'>
        <span className='mdi mdi-calendar-clock timer-icon'></span>
        <h2>Countdown Timer</h2>
        <p>Countdown to a really special date.One you could or would never imagine</p>
      </div>
      <div>
        <section>
          <p>{timerDays}</p>
          <p><small>Days</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p><small>Hours</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <p><small>Minutes</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <p><small>Seconds</small></p>
        </section>
        
       

      </div>
    </section>

  </section>
  )
}

export default App