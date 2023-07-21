import { useState, useContext, useEffect } from "react";
import StateContext from "../states/states-context";
import "../assets/searchBox.css";
import goToCityArrowIcon from "../assets/goToCityArrowIcon.svg";

//.................................................

const Suggestions = () => {
  //.................................................

  const ctx = useContext(StateContext);

  //.................................................

  const press = (e) => {
    ctx.getUrl(e.target.value);
    ctx.updateButtonStatus(true);
  };

  useEffect(() => {
    ctx.isDone && ctx.getUrl("");
  }, [ctx.isDone]);
  
  console.log(ctx.suggestionsList);
  //.................................................

  return (
    <div className="suggestionsWrapper">
      {ctx.suggestionsList.map((s) => (
        <div className="suggestions">
          <div>
            <button className="suggestion" value={s.url} onClick={press}>
              {s.name + " ," + s.region + " ," + s.country}
              <img src={goToCityArrowIcon} />
            </button>
          </div>
          <hr className="line" />
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
