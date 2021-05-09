const ExportButton = (props) => {
  return (
    <button
      onClick={() => props.exportOverlay()}
      className="export-overlay"
      style={{
        fontSize: "" + parseInt(0.05 * props.resolution[1]) + "px",
        width: "" + parseInt(0.5 * props.resolution[1]) + "px",
        height: "" + parseInt(0.1 * props.resolution[1]) + "px",
        top: "" + props.resolution[1] + "px",
        left: "" + props.resolution[0] + "px",
      }}
    >
      EXPORT OVERLAY
    </button>
  );
};

export { ExportButton };
