import { ScreenReference } from "./ScreenReference.js";
import { ControllerButton } from "./ControllerButton.js";

const TouchEditor = (props) => {
  return (
    <div
      className="touch-editor"
      style={{
        width: "" + props.resolution[0] + "px",
        height: "" + props.resolution[1] + "px",
      }}
      onClick={props.move}
    >
      <ScreenReference resolution={props.resolution} />
      {Array.from({ length: props.positions.length / 2 }, (v, i) => i).map(
        (index) => (
          <ControllerButton
            position={[
              props.positions[2 * index] - 0.5 * props.sizes[2 * index],
              props.positions[2 * index + 1] - 0.5 * props.sizes[2 * index + 1],
            ]}
            size={[props.sizes[2 * index], props.sizes[2 * index + 1]]}
            index={index}
          />
        )
      )}
    </div>
  );
};

export { TouchEditor };
