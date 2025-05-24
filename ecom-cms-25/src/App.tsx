import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";
import MyComp from "./MyComp";
import Todo from "./todo";
import NewTodo from "./redux/slices/todo/newTodo";


const App = () => {
  // const count = useAppSelector((state) => state.counter);
  // const dispatch = useAppDispatch();
  return (
    <div>
      {/* <button onClick={() => dispatch(increment())}>Increment</button>

      <h1>Count is {count}</h1>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComp/>
      <Todo/> */}
      <NewTodo/>
      
    </div>
  );
};

export default App;
