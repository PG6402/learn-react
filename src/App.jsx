import { useEffect, useRef, useState } from "react";
import "./App.css";
import InputItem from "./common/InputItem";

function App() {
  const [show, setShow] = useState(false);
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  useEffect(() => {}, [show]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ position: "relative", bottom: "10rem" }}
      >
        <p style={{ textAlign: "start", marginBottom: -1 }}> Enter text:</p>
        <InputItem ref={inputRef} />
        <button type="submit" style={{ float: "left", marginTop: "10px" }}>
          Get value
        </button>
      </form>

      {inputRef.current?.value && (
        <p style={{ whiteSpace: "nowrap" }}>
          Result : {inputRef.current.value}
        </p>
      )}
    </>
  );
}

export default App;
