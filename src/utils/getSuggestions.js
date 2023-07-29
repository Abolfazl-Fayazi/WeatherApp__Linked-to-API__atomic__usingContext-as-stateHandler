import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import StateContext from "../states/states-context";

//---------------------------------------------------------------------------------

const GetSuggestions = (e) => {
  //---------------------------------------------------------------------------------

  const ctx = useContext(StateContext);
  const [suggestionsList, setSuggestionsList] = useState([]);

  //.................................................

  useEffect(() => {
    //......................................
    //console.log(ctx.input);
    //......................................

    if (!ctx.isDone && ctx.input.length !== 0) {
      Axios.get(
        `http://api.weatherapi.com/v1/search.json?key=4f1675fae8704b8e891175532231003 &q=${ctx.input}`
      )
        .then((res) => setSuggestionsList(res.data))
        .catch((err) => console.log(err));
    } else if (ctx.isDone || ctx.input.length === 0) {
      setSuggestionsList([]);
    }

    //......................................
  }, [ctx.input, ctx.isDone]);

  //......................................

  ctx.getSuggestionsList(suggestionsList);
};

//---------------------------------------------------------------------------------

export default GetSuggestions;
