import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import "./App.css";


function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");



  return (
    <div className="App">
      <Counter />
      <label htmlFor="username"> Username </label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "SET_USERNAME", payload: username })}
      >
        {" "}
        Change{" "}
      </button>
      <button onClick={(e) => dispatch({type: "AddName", payload: username})}> ADD </button>
      <h2>
        {" "}
        Your username: <p>{state.user.userName}</p>
      </h2>
      {state.names.map(() => {
          return (
            <div className="name">
              <p>{state.user.userName}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
