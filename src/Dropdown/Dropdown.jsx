/* eslint-disable react/prop-types */
import { useState } from "react";
import DropdownProvider from "./dropdown-context";

export default function Dropdown({ children, header, ...props }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(header);
  const handleGetVaue = (value) => {
    setValue(value);
  };
  return (
    <DropdownProvider {...props} handleGetVaue={handleGetVaue}>
      <p
        style={{
          padding: "1rem",
          border: ".2rem solid gray",
          borderRadius: ".5rem",
          marginBottom: "4px",
          cursor: "pointer",
        }}
        onClick={() => setShow(!show)}
      >
        {value}
      </p>
      {show && (
        <div
          style={{
            border: ".2rem solid gray",
            padding: ".5rem",
            borderRadius: ".5rem",
          }}
        >
          {children}
        </div>
      )}
    </DropdownProvider>
  );
}
