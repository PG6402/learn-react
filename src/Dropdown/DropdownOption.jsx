import { Fragment } from "react";
import { useDropdown } from "./dropdown-context";

export default function DropdownOption() {
  const { options, handleGetVaue } = useDropdown();
  return (
    <>
      {options.length != 0 &&
        options.map((item) => {
          return (
            <Fragment key={item.title}>
              <p
                style={{
                  padding: "1rem 3rem",
                  cursor: "pointer",
                }}
                onClick={() => handleGetVaue(item.title)}
              >
                {item.title}
              </p>
            </Fragment>
          );
        })}
    </>
  );
}
