import { useContext, useState } from "react";
import "./assets/App.css";
import SearchBox from "./components/searchBox";
import SearchResult from "./components/searchResult";
import StateContext from "./states/states-context";
import Header from "./components/header";

//.................................................

function App() {
  
  const ctx = useContext(StateContext);

  //.................................................

  //console.log(ctx.input)

  return (
    <div>
      <Header />
      <SearchBox />
      <SearchResult />
    </div>
  );
}

export default App;
