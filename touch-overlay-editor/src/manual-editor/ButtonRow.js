import { Button } from "./Button.js";

const ButtonRow = (props) => {
  return [
    props.name,
    props.precisionValues.map((offset) => (
      <Button
        handler={() => {
          props.handler(offset);
        }}
        dimensions={[props.dimensions[0], props.dimensions[1]]}
        content={"" + offset + ""}
      />
    )),
  ];
};

export { ButtonRow };
