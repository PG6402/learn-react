import { useReducer } from "react";
import "./App.css";

function App() {
  //initState
  const initState = {
    task: "",
    tasks: [],
  };

  //action
  const SET_TASK = "set_task";
  const ADD_TASK = "add_task";
  const DELETE_TASK = "delete_task";

  //
  const setTask = (payload) => ({ type: SET_TASK, payload });
  const addTask = (payload) => ({ type: ADD_TASK, payload });
  const deleteTask = (payload) => ({ type: DELETE_TASK, payload });
  //reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_TASK:
        return {
          ...state,
          task: action.payload,
        };
      case ADD_TASK:
        return {
          task: "",
          tasks: [...state.tasks, action.payload],
        };
      case DELETE_TASK:
        state.tasks.splice(action.payload, 1);
        return { ...state, tasks: state.tasks };
      default:
        throw new Error("Invalid action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const { task, tasks } = state;
  return (
    <>
      <h1>Todo list</h1>
      <div
        style={{
          padding: "10px",
          border: ".1rem solid gray",
          borderRadius: ".5rem",
        }}
      >
        <input
          value={task}
          style={{ fontSize: "20px", padding: "7px", marginRight: "10px" }}
          onChange={(e) => dispatch(setTask(e.target.value))}
        />
        <button onClick={() => dispatch(addTask(task))}>Add</button>
      </div>

      <div>
        <ul>
          {tasks.map((item, index) => {
            return (
              <li key={index}>
                {item}{" "}
                <span
                  style={{ fontSize: "20px" }}
                  onClick={() => dispatch(deleteTask(index))}
                >
                  &times;
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
