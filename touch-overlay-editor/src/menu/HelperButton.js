import { buttonHelpers } from "../templates/psx.js";

const HelperButton = (props) => {
  const buttonName = buttonHelpers[props.helperNumber][0];
  return (
    <button
      className="menu-button"
      style={{
        fontSize:
          "" +
          parseInt(
            (0.95 * props.dimensions[1]) /
              Math.pow(buttonName.length + 1, 3 / 10)
          ) +
          "px",
        width: "" + props.dimensions[0] + "px",
        height: "" + props.dimensions[1] + "px",
        margin: "" + props.dimensions[2] + "px",
      }}
      onClick={() => {
        props.selectHelper(props.helperNumber);
      }}
    >
      {buttonName}
    </button>
  );
};
export { HelperButton };
