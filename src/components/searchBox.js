import { useEffect, useState, useContext } from "react";

import Input from "./input";
import Button from "./button";
import GetSuggestions from "../utils/getSuggestions";
import GetData from "../utils/getData";
import Suggestions from "./suggestions";
import StateContext from "../states/states-context";
import "../assets/searchBox.css";

//.................................................

const SearchBox = (props) => {
  //.................................................

  const ctx = useContext(StateContext);

  //.................................................

  //.................................................

  return (
    <div>
      <div className="wrapper">
        <div className="searchEngin">
          <Input />
          <Button />
        </div>
        <GetSuggestions />
        <Suggestions />
      </div>
      <GetData />
    </div>
  );
};
export default SearchBox;
