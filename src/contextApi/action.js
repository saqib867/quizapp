
export function addQuestion(data){

       const action={

           type:'ADD',
           payload:data
       }
       return action
}

export function getQuestion(data){

      const action={
          
         type:'RECEIVE',
         payload:data
      }
      return action
}