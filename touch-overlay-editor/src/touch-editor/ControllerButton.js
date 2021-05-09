import { images } from "../templates/retropad.js";

const ControllerButton = (props) => {
  return (
    <img
      src={images[props.index]}
      alt={props.index}
      style={{
        position: "absolute",
        width: props.size[0],
        height: props.size[1],
        top: "" + props.position[1] + "px",
        left: "" + props.position[0] + "px",
      }}
    />
  );
};
export { ControllerButton };
