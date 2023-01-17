import React from 'react'
import { Link } from 'react-router-dom'
import PreviewComponent from '../component/right/PreviewComponent'

function Test() {
  return (
    <div>
       
      <PreviewComponent backgroundColor='rgb(89, 64, 96)' isTest={true} />
    </div>
  )
}

export default Test
