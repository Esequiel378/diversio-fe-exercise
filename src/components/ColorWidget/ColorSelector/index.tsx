import "./index.css";

const ColorSelector = () => {
  return (
    <div className="color-selector-wrapper">
      <div
        style={{ backgroundColor: "red" }}
        className="color-selector-option"
      />
      <div
        style={{ backgroundColor: "green" }}
        className="color-selector-option"
      />
      <div
        style={{ backgroundColor: "blue" }}
        className="color-selector-option"
      />
    </div>
  );
};

export default ColorSelector;
