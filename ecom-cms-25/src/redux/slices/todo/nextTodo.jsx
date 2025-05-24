import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../todoChai/todoSlice";

const Nepal = () => {
  const todos = useSelector((state) => state.Todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-2xl font-bold text-gray-800 my-4 text-center">
        Todos
      </div>
      <ul className="space-y-3">
        {" "}
        {/* Added a ul and some spacing */}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md" // Flexbox for alignment, padding, rounded corners, shadow
          >
            <div className="text-lg text-gray-700 flex-grow">
              {" "}
              {/* Larger text, gray color, grows to fill space */}
              {todo.text}
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200" // Styled button
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nepal;
