export const initialState={

    questions:[]
}


export default function reducer(state,action){

      switch(action.type){

           case 'ADD':
                    
                    state.questions.push(action.payload)    
                    return {...state,questions:state?.questions}
           case 'RECEIVE':
                    return {...state,questions:action.payload}         
           default:
            return state
      }
}