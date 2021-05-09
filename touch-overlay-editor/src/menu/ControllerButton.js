import { buttonNames, buttonMenu } from "../templates/psx.js";

const ControllerButton = (props) => {
  const buttonIndex = buttonMenu[props.coordinates[0]][props.coordinates[1]];
  const buttonName = buttonNames[buttonIndex];
  return (
    <button
      className="menu-button"
      style={{
        fontSize:
          "" +
          parseInt(
            (0.8 * props.dimensions[1]) / Math.pow(buttonName.length + 1, 1 / 3)
          ) +
          "px",
        width: "" + props.dimensions[0] + "px",
        height: "" + props.dimensions[1] + "px",
        margin: "" + props.dimensions[2] + "px",
      }}
      onClick={() => {
        props.selectButton(buttonIndex);
      }}
    >
      {buttonName}
    </button>
  );
};
export { ControllerButton };
