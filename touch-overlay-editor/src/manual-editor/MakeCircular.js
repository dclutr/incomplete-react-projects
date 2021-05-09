const MakeCircular = (props) => {
  return (
    <button
      onClick={props.makeCircular}
      style={{
        width: "" + props.dimensions[0] + "px",
        height: "" + props.dimensions[1] + "px",
        fontSize: "" + parseInt(0.6 * props.dimensions[1]) + "px",
      }}
    >
      MakeCircular
    </button>
  );
};

export { MakeCircular };
