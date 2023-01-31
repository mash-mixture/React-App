import React, { useEffect, useState } from 'react'

function Timer() {
  //const [count , setCount] = useState(0);
  const [date , setDate] = useState(new Date())

   useEffect(()=>{
    //console.log('Use Effect Rendered')
    setTimeout(()=>{
      //setCount(count + 1);
      setDate(new Date())
    }, 1000)
    
    // setInterval(()=>{
    //   setCount(count + 1);
    // }, 1000)
    
   },[date])
  
   //console.log('Component Rendered')

  return (
    <div  className='text-center timer'>{date.toLocaleTimeString()}</div>

  )
}

//setInterval(Timer , 1000);

export default Timer