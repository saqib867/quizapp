import React from 'react'
import './Options.css'

function Options({inputConfig,label}) {
  return (
    <div className='input__options'>
        <label className='input__label'>{label}</label>
        <input className='input' {...inputConfig}  />
    </div>
  )
}

export default Options
