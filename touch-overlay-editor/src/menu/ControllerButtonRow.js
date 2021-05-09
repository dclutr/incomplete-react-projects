import { buttonMenu } from "../templates/psx.js";
import { ControllerButton } from "./ControllerButton.js";

const ControllerButtonRow = (props) => {
  return (
    <div
      className="menu-row"
      style={{
        width: "" + props.dimensions[0] + "px",
        height: "" + props.dimensions[1] + "px",
        margin: "" + props.dimensions[2] + "px",
      }}
    >
      {Array.from(
        { length: buttonMenu[props.rowNumber].length },
        (v, i) => i
      ).map((index) => (
        <ControllerButton
          coordinates={[props.rowNumber, index]}
          dimensions={[
            props.dimensions[0] / buttonMenu[props.rowNumber].length -
              2 * 0.1 * props.dimensions[1],
            0.8 * props.dimensions[1],
            0.1 * props.dimensions[1],
          ]}
          selectButton={props.selectButton}
        />
      ))}
    </div>
  );
};

export { ControllerButtonRow };
