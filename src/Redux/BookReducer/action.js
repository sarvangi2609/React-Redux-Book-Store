
import axios from "axios";
import { PROSUCCESS } from "./actionTypes";


export const getBooks =(paramObj)=> (dispatch) => {
  // Write logic here

  axios.get("http://localhost:8080/books",{
    params:paramObj
  })
  .then((res)=>{
    console.log(res.data)
    dispatch({type:PROSUCCESS,payload:res.data})
  })
  .catch((err)=>console.log(err))

};

export const editBook = (id,editdata)=>(dispatch) => {
  // Write logic here

  axios.patch(`http://localhost:8080/books/${id}`,editdata)
  .then((res)=>{
    alert("book Update Successfully")
    getBooks(dispatch)
  })
  .catch((err)=>console.log(err))


};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
