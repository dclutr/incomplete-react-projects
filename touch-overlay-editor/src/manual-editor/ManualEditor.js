import { Button } from "./Button.js";
import { ButtonRow } from "./ButtonRow.js";

const ManualEditor = (props) => {
  return (
    <div
      className="manual-editor"
      style={{
        width: "" + parseInt(props.resolution[1]) + "px",
        height: "" + props.resolution[1] + "px",
        top: "0px",
        left:
          "" + parseInt(props.resolution[1] * 0.5 + props.resolution[0]) + "px",
        fontSize: "" + parseInt(0.1 * props.resolution[1]) + "px",
      }}
    >
      {props.picked > -1
        ? [
            "BUTTON",
            <br />,
            <Button
              handler={props.handlers.moveToCentre}
              dimensions={[
                props.resolution[1] * 0.48,
                props.resolution[1] * 0.08,
              ]}
              content="Move To Center"
            />,
            [
              [
                ["-5", "-1", "+1", "+5"],
                (offset) => {
                  props.handlers.scaleXY(parseInt(offset), () => true);
                },
                "SIZE  ",
              ],
            ].map(([precisionValues, handler, name]) => (
              <div
                style={{
                  fontSize: "" + props.resolution[1] * 0.04 + "px",
                  margin: "" + props.resolution[1] * 0.004 + "px",
                }}
              >
                <ButtonRow
                  handler={handler}
                  dimensions={[
                    props.resolution[1] * 0.08,
                    props.resolution[1] * 0.08,
                  ]}
                  precisionValues={precisionValues}
                  name={name}
                />
              </div>
            )),
          ]
        : ["HELPER", <br />].concat(
            [
              [props.handlers.moveToCentre, "Move To Center"],
              [props.handlers.makeCircular, "Make Circular"],
              [props.handlers.equalizeY, "Equalize Height"],
              [props.handlers.equalizeSize, "Equalize Size"],
            ]
              .map(([handler, content]) => (
                <Button
                  handler={handler}
                  dimensions={[
                    props.resolution[1] * 0.48,
                    props.resolution[1] * 0.08,
                  ]}
                  content={content}
                />
              ))
              .concat(
                [
                  [
                    ["-5", "-1", "+1", "+5"],
                    (offset) => {
                      props.handlers.scaleXY(parseInt(offset), () => true);
                    },
                    "SIZE  ",
                  ],
                  [
                    ["-5", "-1", "+1", "+5"],
                    (offset) => {
                      props.handlers.scaleXY(parseInt(offset), (val, index) =>
                        index % 2 ? true : false
                      );
                    },
                    "SIZE1 ",
                  ],
                  [
                    ["-5", "-1", "+1", "+5"],
                    (offset) => {
                      props.handlers.scaleXY(parseInt(offset), (val, index) =>
                        index % 2 ? false : true
                      );
                    },
                    "SIZE2 ",
                  ],
                  [
                    ["0.5", "0.9", "1.1", "1.5"],
                    (offset) => {
                      props.handlers.radiusXY(parseFloat(offset), () => true);
                    },
                    "RADIUS  ",
                  ],
                  [
                    ["0.5", "0.9", "1.1", "1.5"],
                    (offset) => {
                      props.handlers.radiusXY(
                        parseFloat(offset),
                        (val, index) => (index % 2 ? true : false)
                      );
                    },
                    "RADIUS1 ",
                  ],
                  [
                    ["0.5", "0.9", "1.1", "1.5"],
                    (offset) => {
                      props.handlers.radiusXY(
                        parseFloat(offset),
                        (val, index) => (index % 2 ? false : true)
                      );
                    },
                    "RADIUS2 ",
                  ],
                ].map(([precisionValues, handler, name]) => (
                  <div
                    style={{
                      fontSize: "" + props.resolution[1] * 0.04 + "px",
                      margin: "" + props.resolution[1] * 0.004 + "px",
                    }}
                  >
                    <ButtonRow
                      handler={handler}
                      dimensions={[
                        props.resolution[1] * 0.08,
                        props.resolution[1] * 0.08,
                      ]}
                      precisionValues={precisionValues}
                      name={name}
                    />
                  </div>
                ))
              )
          )}
    </div>
  );
};
export { ManualEditor };
