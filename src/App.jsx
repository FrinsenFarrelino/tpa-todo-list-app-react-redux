import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputTodo from "./components/InputTodo";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InputTodo />
      <Todo />
    </>
  );
}

export default App;
