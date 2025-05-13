import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({id,name,image,author,category,year,chapter}) => {
  return (
    <div className="book-card" key={id} style={{width:"30%" ,margin:"20px 10px",border:"1px solid black",padding:"20px 0px"}}>
     
      <div className="book-image">
        <img src={image} alt="" height={200} width={200} />
      </div>
      <div className="book-name">
        {name}
      </div>
      <div className="book-author">
        {author}
      </div>
      <div className="book-category">
        {category}
      </div>
      <div className="book-year">
        {year}
      </div>
      <div className="book-chapter">
        {chapter}
      </div>

      <Link to={`/edit-book/${id}`}><button>EDIT</button></Link>


    </div>
  );
};
