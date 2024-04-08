/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const DropdownContext = createContext();
export default function DropdownProvider({ children, ...props }) {
  return (
    <DropdownContext.Provider value={props}>
      {children}
    </DropdownContext.Provider>
  );
}

const useDropdown = () => {
  const dropdown = useContext(DropdownContext);
  if (typeof dropdown === "undefined") {
    throw new Error("use context not found");
  }
  return dropdown;
};

export { useDropdown };
