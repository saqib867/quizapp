import React from 'react'
import { Link } from 'react-router-dom'
import QuestionForm from '../component/left/QuestionForm/QuestionForm'
import PreviewComponent from '../component/right/PreviewComponent'
import { useStateValue } from '../contextApi/context'
import './QuestionPage.css'

function QuestionPage() {

 const[l,dispatch]=useStateValue()
  return (
    <div className='question_page'>
     
      <QuestionForm/>
      <PreviewComponent/>
    </div>
  )
}

export default QuestionPage
