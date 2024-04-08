import "./App.css";
import Dropdown from "./Dropdown";

function App() {
  const options = [
    { title: "option 1" },
    { title: "option 2" },
    { title: "option 3" },
  ];

  return (
    <>
      <Dropdown options={options} header={"Please select option"}>
        <Dropdown.Option></Dropdown.Option>
      </Dropdown>
    </>
  );
}

export default App;
