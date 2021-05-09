import { buttonMenu } from "../templates/psx.js";
import { ControllerButtonRow } from "./ControllerButtonRow.js";

const MenuRight = (props) => {
  return (
    <div
      className="menu"
      style={{
        width: "" + parseInt(props.resolution[1] * 0.5) + "px",
        height: "" + props.resolution[1] + "px",
        top: "0px",
        left: "" + props.resolution[0] + "px",
      }}
    >
      {Array.from({ length: buttonMenu.length }, (v, i) => i).map(
        (rowNumber) => (
          <ControllerButtonRow
            rowNumber={rowNumber}
            dimensions={[
              props.resolution[1] * 0.5 -
                (2 * (0.1 * props.resolution[1])) / (buttonMenu.length + 1),
              (0.9 * props.resolution[1]) / buttonMenu.length,
              (0.1 * props.resolution[1]) / (buttonMenu.length + 1),
            ]}
            selectButton={props.selectButton}
          />
        )
      )}
    </div>
  );
};
export { MenuRight };
