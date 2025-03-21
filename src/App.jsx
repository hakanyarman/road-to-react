import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { Counter } from "./components/Counter";

function App() {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = words.filter((word) => {
    return word.includes(searchTerm);
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const now = new Date().getTime();

  return (
    <div>
      <Search onChange={handleChange}></Search>
      <ul style={{ listStyle: "none" }}>
        {filteredWords.map((x, index) => {
          return (
            <li key={index}>
              {" "}
              {index + 1} {x}
            </li>
          );
        })}
      </ul>
      {now.toString()}
      <Counter />
    </div>
  );
}

export default App;
