import { useContext, useState } from "react";
import "./assets/App.css";
import SearchBox from "./components/searchBox";
import SearchResult from "./components/searchResult";
import StateContext from "./states/states-context";
import Header from "./components/header";
import ResultLoader from "./components/resultLoader";

//---------------------------------------------------------------------------------

function App() {
  //---------------------------------------------------------------------------------

  const ctx = useContext(StateContext);

  //---------------------------------------------------------------------------------

  return (
    <div>
      <Header />
      <SearchBox />
      <ResultLoader />
      <SearchResult />
    </div>
  );
}

//---------------------------------------------------------------------------------

export default App;
