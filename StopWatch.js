import React, { useState } from 'react'
import Display from './Display'
import Button from './Button'
import './StopWatch.css'

const StopWatch = () => {
    const [time,setTime] = useState({m:0,s:0,h:0})
    const [inter,setInter] = useState()
    const [status,setStatus] = useState(0)
    var UpdatedS= time.s , UpdatedM = time.m ,UpdatedH=time.h;
    
    const start =() =>{
        run()
        setInter(setInterval(run,1000))
        setStatus(1)
    }
    const stop =()=>{
        clearInterval(inter)
        setStatus(0)

    }
    const reset =()=>{
        clearInterval(inter)
        setTime({m:0,s:0,h:0})
        setStatus(0)

    }
    const run =()=>{
        if(UpdatedS===60){
            UpdatedM++;
            UpdatedS=0;
        }
        if(UpdatedM===60){
            UpdatedH++;
            UpdatedM=0;
        }
        UpdatedS++;
        return setTime({s:UpdatedS,m:UpdatedM,h:UpdatedH})
    }
  return (
    <div className="stopwatch-container">
        <h1 className="stopwatch-title">STOP WATCH</h1>
        <Display time ={time} />
        <Button start={start} status={status} stop={stop} reset={reset} />
    </div>
  )
}

export default StopWatch