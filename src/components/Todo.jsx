import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  editTodo,
} from "../redux/reducers/todo-reducer";

export default function Todo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  // console.log(todos);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id) => {
    console.log(id);
    dispatch(editTodo(id));
  };

  const handleComplete = (id) => {
    console.log(id);
    dispatch(completeTodo(id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div className="flex justify-between items-center">
            <input type="checkbox" onClick={() => handleComplete(todo.id)} />
            <span>{todo.value}</span>
            <div className="flex justify-between">
              <button className="mr-3 px-5" onClick={() => handleEdit(todo.id)}>
                Edit
              </button>
              <button className="px-5" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
