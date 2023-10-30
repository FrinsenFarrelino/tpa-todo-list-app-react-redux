import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";

export default function InputTodo() {
  const dispatch = useDispatch();
  const { editedTodo } = useSelector((state) => state.editedTodo);
  const [input, setInput] = useState(editedTodo);

  console.log(editedTodo);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="mb-5">
        <form action="">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Masukkan todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleClick}>add</button>
          </div>
        </form>
      </div>
    </>
  );
}
