import Axios from "axios";
import { useEffect, useState, useContext } from "react";
import StateContext from "../states/states-context";

//.................................................

const GetData = () => {
  const ctx = useContext(StateContext);
  const [result, setResult] = useState({});

  //.................................................

  useEffect(() => {
    console.log(ctx.url);

    if (ctx.url.length > ctx.input.length && ctx.buttonStatus) {
      Axios.get(
        `http://api.weatherapi.com/v1/current.json?key=4f1675fae8704b8e891175532231003 &q=${ctx.url}&aqi=no`
      )
        .then((res) => setResult(res.data))
        .catch((err) => console.log(err));
      ctx.updateIsDone(true);
    }
  }, [ctx.url, ctx.buttonStatus]);

  //...................................

  useEffect(() => {
    if (ctx.input.length > ctx.url.length && ctx.buttonStatus) {
      console.log(ctx.buttonStatus);
      console.log(ctx.input);

      Axios.get(
        `http://api.weatherapi.com/v1/current.json?key=4f1675fae8704b8e891175532231003 &q=${ctx.input}&aqi=no`
      )
        .then((res) => setResult(res.data))
        .catch((err) => console.log(err));
      ctx.updateIsDone(true);
    }
  }, [ctx.input, ctx.buttonStatus]);

  //...................................

  useEffect(() => {
    ctx.getResult(result);
  }, [result]);
};

export default GetData;
