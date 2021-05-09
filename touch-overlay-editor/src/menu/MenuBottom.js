import { buttonHelpers } from "../templates/psx.js";
import { HelperButton } from "./HelperButton.js";

const MenuBottom = (props) => {
  return (
    <div
      className="menu"
      style={{
        width: "" + props.resolution[0] + "px",
        height: "" + parseInt(0.1 * props.resolution[1]) + "px",
        top: "" + props.resolution[1] + "px",
        left: "0px",
      }}
    >
      {Array.from({ length: buttonHelpers.length }, (v, i) => i).map(
        (helperNumber) => (
          <HelperButton
            helperNumber={helperNumber}
            dimensions={[
              props.resolution[1] * 0.32 -
                (2 * (0.08 * props.resolution[1])) / (buttonHelpers.length + 1),
              (0.4 * props.resolution[1]) / buttonHelpers.length,
              (0.048 * props.resolution[1]) / (buttonHelpers.length + 1),
            ]}
            selectHelper={props.selectHelper}
          />
        )
      )}
    </div>
  );
};
export { MenuBottom };
