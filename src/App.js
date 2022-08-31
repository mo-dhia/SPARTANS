import "./App.css";
import React, { useState, useEffect } from "react";
import FirstPage from "./components/FirstPage";
import Navigation from "./components/Navigation";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState(false);

  const [temp, setTemp] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("50n");

  const [firstPage, setFirstPage] = useState(false);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPagePage, setThirdPagePage] = useState(false);
  const [forthPage, setForthPage] = useState(false);
  const [fifthPage, setFifthPage] = useState(false);

  useEffect(() => {
    getWeather();
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  async function getWeather() {
    try {
      const response = await axios.get(url);
      setTemp(response.data.current.temp);
      setWeatherIcon(response.data.current.weather[0].icon);
    } catch (error) {
      console.log(error);
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=36.765384&lon=10.193044&appid=${"ace6e6977f5970b3791f425977bebbae"}&units=metric`;

  const schedule = [
    { 1: "Legs" },
    { 1: "Chest", 2: "Back" },
    { 1: "Deltoids" },
  ];

  return (
    <div>
      <Navigation
        firstPage={firstPage}
        secondPage={secondPage}
        thirdPagePage={thirdPagePage}
        forthPage={forthPage}
        fifthPage={fifthPage}
      />
      <FirstPage temp={temp} weatherIcon={weatherIcon} schedule={schedule[2]} />
      <div
        style={{
          backgroundColor: "lavenderblush",

          transform: "rotate(136deg)",
          padding: "45px 45px",
          position: "fixed",
          right: "0",
          top: "0%",
          left: "-133%",
          width: "500%",
        }}
      />

      <div
        style={{
          backgroundColor: "#b22c33",
          transform: "rotate(136deg)",
          padding: "45px 45px",
          position: "fixed",
          right: "0",
          top: "0%",
          left: "-115%",
          width: "500%",
        }}
      />
    </div>
  );
};

export default App;
