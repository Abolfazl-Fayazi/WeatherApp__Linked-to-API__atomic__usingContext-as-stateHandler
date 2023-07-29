import React, { useState } from "react";

//---------------------------------------------------------------------------------

const StateContext = React.createContext({
  input: "",
  getInput: () => {},
  suggestionsList: [],
  getSuggestionsList: () => {},
  url: "",
  getUrl: () => {},
  result: {},
  getResult: () => {},
  buttonStatus: false,
  updateButtonStatus: () => {},
  isDone: false,
  updateIsDone: () => {},
  conditionClass: "",
  conditionIcon: "",
  isLoading: false,
});

//---------------------------------------------------------------------------------

export const StateContextProvider = (props) => {
  //---------------------------------------------------------------------------------

  const [input, setInput] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [url, setUrl] = useState("");
  const [result, setResult] = useState({});
  const [buttonStatus, setButtonStatus] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [conditionClass, setConditionClass] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //---------------------------------------------------------------------------------

  const getInput = (x) => {
    setInput(x);
  };

  //......................................

  const getSuggestionsList = (x) => {
    setSuggestionsList(x);
  };

  //......................................

  const getUrl = (x) => {
    setUrl(x);
  };

  //......................................

  const getResult = (x) => {
    setResult(x);
  };

  //......................................

  const updateButtonStatus = (x) => {
    setButtonStatus(x);
  };

  //......................................

  const updateIsDone = (x) => {
    setIsDone(x);
  };

  //......................................

  const getConditionClass = (x) => {
    setConditionClass(x);
  };

  //......................................

  const getConditionIcon = (x) => {
    setConditionIcon(x);
  };

  //......................................

  const updateIsLoading = (x) => {
    setIsLoading(x);
  };

  //---------------------------------------------------------------------------------

  return (
    <StateContext.Provider
      value={{
        input: input,
        getInput: getInput,
        suggestionsList: suggestionsList,
        getSuggestionsList: getSuggestionsList,
        url: url,
        getUrl: getUrl,
        result: result,
        getResult: getResult,
        buttonStatus: buttonStatus,
        updateButtonStatus: updateButtonStatus,
        isDone: isDone,
        updateIsDone: updateIsDone,
        conditionClass: conditionClass,
        getConditionClass: getConditionClass,
        conditionIcon: conditionIcon,
        getConditionIcon: getConditionIcon,
        isLoading: isLoading,
        updateIsLoading: updateIsLoading,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

//---------------------------------------------------------------------------------

export default StateContext;
