
import {
  decrement,
  increment,
  incrementByvalue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispacth = useAppDispatch();
  return (
    <>
      <div className="h-screen w-full flex justify-center  border items-center   	">
        <div className="flex gap-10 border p-10 border-purple-400 bg-slate-300">
          <button
            onClick={() => dispacth(decrement())}
            className="py-2 px-5 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75"
          >
            Decrement
          </button>
          <button
            onClick={() => dispacth(incrementByvalue(5))}
            className="py-2 px-5 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75"
          >
            Increment By 5
          </button>
          <h3>{count}</h3>
          <button
            onClick={() => dispacth(increment())}
            className="py-2 px-5 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-75"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
