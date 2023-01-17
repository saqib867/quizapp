import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useStateValue } from '../../contextApi/context'
import { url } from '../../firebaseUri'
import './PreviewComponent.css'
import QuestionList from './QuestionList'
import { getQuestion } from '../../contextApi/action'
import { Link } from 'react-router-dom'


function PreviewComponent({backgroundColor,isTest}) {
  const [{questions},dispatch]=useStateValue()
  //const [questions,setQuestion]=useState([])
useEffect(()=>{
         
       axios.get(`${url}/quiz.json`)
       .then(res=>{
        const questionList=[]

        for(let key in res.data){
 
             const questionObj={
                   
                   id:key,
                   q:res.data[key].q,
                   options:res.data[key].options,
                   correct:res.data[key].correct
             }
             questionList.push(questionObj)
        }
             dispatch(getQuestion(questionList))
       })

},[])

  return (
    <div className='previewComponent'>
      <div className='nav__link'>
       <button><Link to={'/'}>Preview</Link></button>
       <button ><Link  to={'/test'}>Test</Link></button>
       </div>
      {
        questions?.length>0 ? 
          questions.map(q=>{
              return(
                <QuestionList list={q} backgroundColor={backgroundColor} isTest={isTest} />
              )
          })
        :
        <h3 className={'no__question'}>No Question</h3>
      }
    </div>
  )
}

export default PreviewComponent