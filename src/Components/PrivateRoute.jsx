import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {

  const {isAuth}= useSelector((state)=>state.auth)

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }
    return children 
  
};
