const initialState = {
  todos: [],
  editedTodo: [],
};

let i = 0;

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: i,
        value: action.payload,
        completed: false,
      };

      const cloneTodos = [...state.todos, newTodo];
      i++;

      return {
        todos: cloneTodos,
      };

    case "DELETE_TODO":
      const filterTodo = state.todos.filter(
        (item) => item.id != action.payload
      );
      return {
        todos: filterTodo,
      };
    case "EDIT_TODO":
      const editTodo = state.todos.filter((item) => item.id == action.payload);
      const todos = state.todos;
      // console.log(todos);

      return {
        editedTodo: editTodo,
        todos: todos,
      };
    case "COMPLETE_TODO":
      // console.log(state.todos[action.payload].completed);
      const completed = !state.todos[action.payload].completed;
      state.todos[action.payload].completed = completed;
      const newTodos = state.todos;
      // console.log(state.todos[action.payload].completed);

      return {
        todos: newTodos,
      };

    default:
      return state;
  }
}

export function addTodo(input) {
  return {
    type: "ADD_TODO",
    payload: input,
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export function editTodo(id) {
  return {
    type: "EDIT_TODO",
    payload: id,
  };
}

export function completeTodo(id) {
  return {
    type: "COMPLETE_TODO",
    payload: id,
  };
}
