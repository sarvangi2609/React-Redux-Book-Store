import { PROERR, PROREQ, PROSUCCESS } from "./actionTypes"

const initialstate = {
  isLoading: false,
  isError: false,
  books: [],
}



export const reducer =(state=initialstate,action)=>{

    switch (action.type) {

        case PROREQ :

            return({isLoading:true,isError:false,books:[]})

        case PROSUCCESS:
            
            return ({isLoading:false,books:action.payload})

        case PROERR :

            return({isLoading:false,isError:true,books:[]})

    
        default:
            return state;
    }



}