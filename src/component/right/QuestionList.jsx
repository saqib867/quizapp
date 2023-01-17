import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../../firebaseUri'
import './QuestionList.css'

function QuestionList({list,isTest,backgroundColor}) {

    const [isBtnClicked,setIsBtnClicked]=useState(false)
    const [currentOption,setCurrentOption]=useState('')
    const [getAnswer,setGetAnswer]=useState('')

const answer=(id,op)=>{
      if(currentOption ===''){
       
         axios.get(`${url}/quiz/${id}.json`)
         .then(res=>{

              if(res.data.correct === op){
                  setGetAnswer({isCorrect:true,ans:res.data.correct})
              }
              else{
                setGetAnswer({isCorrect:false,ans:res.data.correct})
              }
                    
         })
        if(currentOption===op){
             
        }
       setIsBtnClicked(true)
       setCurrentOption(op)
      }
}

  return (
    <div className='question__list' style={{backgroundColor:isBtnClicked && isTest?'rgb(175, 74, 96)':'rgb(50, 50, 80)'}} >
       
        {isBtnClicked && <div>
          <h5>Question has been answered </h5>
          {getAnswer?.isCorrect ?'correct answer': "correct answer is "+getAnswer?.ans}
          
          </div>}
      <h3 >{list?.q}</h3>
      <button className='list__button'
        onClick={()=>answer(list?.id,list?.options?.option1)}
        disabled={isTest && true}
        >
        {list?.options?.option1}
        </button>
      <button className='list__button'
       onClick={()=>answer(list?.id,list?.options?.option2)}
       disabled={isTest && true}
       >
        {list?.options?.option2}
        </button>
      <button className='list__button' 
       onClick={()=>answer(list?.id,list?.options?.option3)}
       disabled={isTest && true}
       >
        {list?.options?.option3}
     </button>
    </div>
  )
}

export default QuestionList
