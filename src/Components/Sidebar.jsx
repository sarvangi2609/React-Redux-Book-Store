import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import { getBooks } from "../Redux/BookReducer/action";

export const Sidebar = () => {

  const [sort, setSort] = useState(null);
  const [searchParams , setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

    const [catVal , setcatVal] = useState(searchParams.getAll("category") || [])


    const paramObj = {

    category:searchParams.getAll("category"),
    _sort:  sort ? "release_year" : undefined, 
    _order: sort,

  }

  const handleChange =(e)=>{

    const {value} = e.target;
    let newarray = [...catVal];

    if(catVal.includes(value)){
     newarray = catVal.filter((el)=> el != value)
    }else{
      newarray.push(value)
    }
    setcatVal(newarray)
  }

  useEffect(()=>{
      // setSearchParams({category:catVal})
      dispatch(getBooks(paramObj))
  },[catVal,paramObj])



  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="novel-filter" type="checkbox" 
        onChange={handleChange}
        name="Novel" value={"Novel"} />
        <label>Novel</label>
        <br />
        <input
          data-testid="science-fiction-filter"
          type="checkbox"
          name="Science_Fiction"
          checked={catVal.includes("Science_Fiction")}
          onChange={handleChange}
          value={"Science_Fiction"}
        />
        <label>Science Fiction</label>
        <br />
        <input
          data-testid="thriller-filter"
          type="checkbox"
          name="Thriller"
          checked={catVal.includes("Thriller")}
          onChange={handleChange}
          value={"Thriller"}
        />
        <label>Thriller</label>
        <br />
        <input
          data-testid="motivational-filter"
          type="checkbox"
          name="Motivational"
          checked={catVal.includes("Motivational")}
          onChange={handleChange}
          value={"Motivational"}
        />
        <label>Motivational</label>
        <br />
      </div>

      <br />
      <br />
      <h3>Sort By Release Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" 
        onClick={() => setSort("asc")}
        name="sort" value={"asc"} />
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          onClick={() => setSort("desc")}
          type="radio"
          name="sort"
          value={"desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
