import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [astronauts, setAstronauts] = useState([]);
  const URL = "http://api.open-notify.org/astros.json";
  async function getAstronauts() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data.message);
      setCount(data.number);
      setAstronauts(data.people);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAstronauts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>People in space</h1>
      </header>
      <p>Number: {count} </p>
      <p>Details:</p>
      <ul>
        {astronauts.map((astronaut) => (
          <li key={astronaut.name}>
            Name: {astronaut.name} Craft: {astronaut.craft}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
