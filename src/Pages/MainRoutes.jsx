import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Homepage } from "./Homepage";
import { EditBook } from "./EditBook";

export const MainRoutes = () => {
  return <Routes>

    <Route path="/" element={<Homepage />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/edit-book/:id" element={<EditBook />}></Route>
  
  </Routes>;
};
