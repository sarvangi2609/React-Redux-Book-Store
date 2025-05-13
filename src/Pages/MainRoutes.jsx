import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Homepage } from "./Homepage";
import { EditBook } from "./EditBook";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return <Routes>

    <Route path="/" element={<Homepage />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/edit-book/:id" element={<PrivateRoute><EditBook /></PrivateRoute>}></Route>
  
  </Routes>;
};
