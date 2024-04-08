import { forwardRef } from "react";

const InputItem = forwardRef((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type="text"
        style={{
          fontSize: "30px",
          padding: "10px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
});
InputItem.displayName = "InputItem";
export default InputItem;
