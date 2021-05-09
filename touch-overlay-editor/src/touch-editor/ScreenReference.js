const ScreenReference = (props) => {
  return (
    <div
      className="screen-reference"
      style={{
        fontColor: "aquamarine",
        width: "" + props.resolution[0] * 0.5 + "px",
        height: "" + props.resolution[1] * 0.7 + "px",
        left: "" + props.resolution[0] * 0.25 + "px",
        top: "0px",
      }}
    >
      Screen
    </div>
  );
};

export { ScreenReference };
