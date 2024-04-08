export default function DropdownInput() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        borderRadius: ".5rem",
        border: ".2rem solid gray",
        padding: ".5rem",
      }}
    >
      <input style={{ fontSize: "1.3rem", padding: ".5rem" }} />
      <button>Find</button>
    </div>
  );
}
