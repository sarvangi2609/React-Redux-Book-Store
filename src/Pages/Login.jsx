import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";

const initialstate = {
  email:"",
  password:""
}

export const Login = () => {

  const [formdata,setformdata]=useState(initialstate)
  const {email,password} = formdata
  const dispatch = useDispatch()



  const HandleChange =(e)=>{

    setformdata({...formdata,[e.target.name]:e.target.value})

  }

  const HandleSubmit =(e)=>{

    e.preventDefault()
    dispatch(login(formdata))
    alert("logged in !")

  }


  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email"
      name="email" 
      value={email}
      onChange={HandleChange} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={HandleChange}
      />
      <button data-testid="user-login" onClick={HandleSubmit}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
