import { ERROR, LOADING, LOGIN } from "./actionTypes";


const initialstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}


export const reducer =(state=initialstate,action)=>{

    switch (action.type) {

        case LOADING :

            return({isLoading:true,isError:false,isAuth:false,token:""})

        case LOGIN:
            
            return ({isLoading:false,isAuth:true,token:action.payload})

        case ERROR :

            return({isLoading:false,isError:true,isAuth:false,token:""})

    
        default:
            return state;
    }



}