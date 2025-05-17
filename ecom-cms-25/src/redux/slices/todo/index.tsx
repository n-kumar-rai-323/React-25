import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Learn Redux Toolkit", completed: false },
  { id: 2, text: "Build a simple app", completed: true },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo , deleteTodo, toggleTodo} = todosSlice.actions;
export default todosSlice.reducer;
