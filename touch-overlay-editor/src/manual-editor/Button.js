const Button = (props) => {
  return (
    <button
      onClick={props.handler}
      style={{
        width: "" + props.dimensions[0] + "px",
        height: "" + props.dimensions[1] + "px",
        fontSize: "" + parseInt(0.5 * props.dimensions[1]) + "px",
      }}
    >
      {props.content}
    </button>
  );
};

export { Button };
