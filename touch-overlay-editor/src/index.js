import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { helperAt } from "./helpers/helperAt.js";
import { xIndex, yIndex } from "./helpers/coordinateIndex.js";
import { getMeanXY } from "./helpers/getMeanXY.js";
import { getMeanX } from "./helpers/getMeanX.js";
import { getMeanY } from "./helpers/getMeanY.js";
import { replaceXY } from "./helpers/replaceXY.js";
import { replaceXYs } from "./helpers/replaceXYs.js";

import {
  positions as defaultPositions,
  sizes as defaultSizes,
} from "./templates/retropad.js";
import { buttonHelpers } from "./templates/psx.js";
import { exportOverlay } from "./export/exportOverlay.js";

import { TouchEditor } from "./touch-editor/TouchEditor.js";
import { MenuRight } from "./menu/MenuRight.js";
import { ManualEditor } from "./manual-editor/ManualEditor.js";
import { MenuBottom } from "./menu/MenuBottom.js";
import { ExportButton } from "./export/ExportButton.js";

const Editor = (props) => {
  const [resolution, setResolution] = useState([480, 270]);
  const [positions, setPositions] = useState(defaultPositions);
  const [sizes, setSizes] = useState(defaultSizes);
  const [picked, setPicked] = useState(0);

  const scaleXY = (offset, customFilter) => {
    setSizes(
      picked > -1
        ? replaceXY(sizes, picked, [
            sizes[xIndex(picked)] + offset,
            sizes[yIndex(picked)] + offset,
          ])
        : replaceXYs(
            sizes,
            buttonHelpers[helperAt(picked)].slice(1).filter(customFilter),
            [offset, offset],
            "scale"
          )
    );
  };
  const equalizeSize = (customFilter = () => true) => {
    setSizes(
      replaceXYs(
        sizes,
        buttonHelpers[helperAt(picked)].slice(1).filter(customFilter),
        [null, null],
        "equalizeSize"
      )
    );
  };
  const radiusXY = (offset, customFilter) => {
    setPositions(
      replaceXYs(
        positions,
        buttonHelpers[helperAt(picked)].slice(1).filter(customFilter),
        [null, null],
        "radius",
        offset
      )
    );
  };

  const moveXY = ([x, y]) => {
    setPositions(
      picked > -1
        ? replaceXY(positions, picked, [x, y])
        : replaceXYs(
            positions,
            buttonHelpers[helperAt(picked)].slice(1),
            [x, y],
            "move"
          )
    );
  };

  const moveToCentre = () =>
    picked > -1
      ? moveXY([resolution[0] / 2, positions[yIndex(picked)]])
      : moveXY([
          resolution[0] / 2,
          getMeanY(positions, buttonHelpers[helperAt(picked)].slice(1)),
        ]);

  const move = (event) => moveXY([event.clientX, event.clientY]);

  const makeCircular = () => {
    setPositions(
      replaceXYs(
        positions,
        buttonHelpers[helperAt(picked)].slice(1),
        [null, null],
        "circle"
      )
    );
  };

  const equalizeY = () => {
    let newPositions = positions;
    const yMean = getMeanY(positions, buttonHelpers[helperAt(picked)].slice(1));
    buttonHelpers[helperAt(picked)].slice(1).forEach((buttonIndex, i) => {
      newPositions = replaceXY(newPositions, buttonIndex, [
        positions[xIndex(buttonIndex)],
        yMean,
      ]);
    });
    setPositions(newPositions);
  };

  return (
    <>
      <TouchEditor
        resolution={resolution}
        positions={positions}
        sizes={sizes}
        move={move}
      />

      <MenuRight
        resolution={resolution}
        positions={positions}
        sizes={sizes}
        selectButton={(index) => setPicked(index)}
      />
      <ManualEditor
        resolution={resolution}
        positions={positions}
        sizes={sizes}
        picked={picked}
        handlers={{
          moveToCentre: moveToCentre,
          makeCircular: makeCircular,
          equalizeY: equalizeY,
          scaleXY: scaleXY,
          radiusXY: radiusXY,
        }}
      />
      <MenuBottom
        resolution={resolution}
        positions={positions}
        sizes={sizes}
        selectHelper={(index) => setPicked(index * -1 - 1)}
      />
      <ExportButton
        resolution={resolution}
        exportOverlay={() => {
          exportOverlay([positions, sizes, resolution]);
        }}
      />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>,
  document.getElementById("root")
);
