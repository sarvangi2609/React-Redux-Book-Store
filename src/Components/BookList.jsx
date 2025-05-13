

import React, { useEffect, useState } from "react";
import { getBooks } from "../Redux/BookReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "./BookCard";

export const BookList = () => {

  const {isloading,iserror,books} = useSelector(state=>state.books)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getBooks)
  },[])


  return isloading ? (<h1>Loading...</h1> ): iserror ? (
    <h1>Somthing Went Wrong !</h1>
  ) :  (
    <div data-testid="book-list" style={{display:"flex",
      flexWrap:"wrap",width:"70%"
    }}>
      {/* Map through books using BookCard component */}
      {books.map((el) => (
  
        <BookCard
        key={el.id}
          name={el.book_name}
          image={el.cover_photo}
          author={el.author}
          category={el.category}
          year={el.release_year}
          id={el.id}
          chapter={el.no_of_chapters}
        />
      ))}
    </div>
  );
};
