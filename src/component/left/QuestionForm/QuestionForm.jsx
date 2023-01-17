import React, { useEffect, useState } from 'react'
import { addQuestion } from '../../../contextApi/action'
import { useStateValue } from '../../../contextApi/context'
import Options from '../options/Options'
import CorrectAnswer from './CorrectAnswer'
import axios from 'axios'
import './QuestionForm.css'
import { url } from '../../../firebaseUri'


function QuestionForm() {

 const [createQuestion,setCreateQuestion]=useState('')
 const [options,setOptions]=useState({})
 const [{questions},dispatch]=useStateValue()
 const [correct,setCorrect]=useState('')
 const [error,setError]=useState('')

const inputHandler=(op,e)=>{
    
     setOptions(item=>(
        {...item,[op]:e.target.value}
     ))
}
const handleCorrect=(e)=>{
       setCorrect(e.target.value)
         
}
useEffect(()=>{
         
        createQuestion?console.log('good'):console.log('no good')
},[])
//mongo password: ycZumjXEQJilRMG7
const submit=()=>{
 
   if(createQuestion && options && correct){
    
    // setCreateQuestion(item=>({...item,op}))
    console.log({...createQuestion,options,correct})
    const data={...createQuestion,options,correct}
    axios.post(`${url}/quiz.json`,{...createQuestion,options,correct})
    .then(response=>{

      dispatch(addQuestion({...createQuestion,options,correct,id:response.data.name}))
    }).catch(err=>console.log("err",err))
    
    setCreateQuestion('') 
    setOptions({})
    setCorrect('')
    setError('')
   }
   else{
       setError('Please fill out all the fields')
   }
   
}


  return (
    <div className='questionForm'>
          {error}
        <textarea className='questionForm__area' value={createQuestion?.q}
         placeholder='Enter Question' onChange={(e)=>setCreateQuestion(({q:e.target.value}))}  />
        
        <Options inputConfig={{
          placeholder:'a',
          onChange:(e)=>inputHandler('option1',e),
          value:options?.option1
          
        }} label='Option A' value={options?.option1}/>
        <Options inputConfig={{
          placeholder:'b',
          onChange:(e)=>inputHandler('option2',e),
          value:options?.option2
        }} label='Option B' 
        />
        <Options inputConfig={{
          placeholder:'c',
          onChange:(e)=>inputHandler('option3',e),
          value:options?.option3
        }} label='Option C' />

        <CorrectAnswer inputConfig={{
          placeholder:'Correct Answer',
          onChange:(e)=>{handleCorrect(e)},
          
        }} label='Answer' />
        
        <button className='form__button' onClick={submit} >ADD</button>
        
    </div>
  )
}

export default QuestionForm