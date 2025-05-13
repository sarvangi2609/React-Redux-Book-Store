
import axios from "axios";
import { LOGIN } from "./actionTypes";



export const login =(formdata)=>(dispatch) => {
  // Complete login logic here
  console.log(formdata)
  axios.post("https://reqres.in/api/login",formdata, {
  headers: {
    "x-api-key": "reqres-free-v1"
  }}
)
  .then((res)=>{
    console.log(res.data)
    dispatch({type:LOGIN,payload:res.data.token})
  })
  .catch((err)=>console.error("Login failed:", err.response?.data || err.message))


};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
