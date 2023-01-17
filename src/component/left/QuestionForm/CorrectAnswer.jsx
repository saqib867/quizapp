import React from 'react'

function CorrectAnswer({label,inputConfig}) {
  return (
    <div>
     <label style={{fontSize:'20px'}}>{label}</label>
     <input className='correct__answer' {...inputConfig}/>
    </div>
  )
}

export default CorrectAnswer
