import { xIndex, yIndex } from "./coordinateIndex.js";

const getMeanXY = (someXYs, indices) => {
  let [x, y] = [0, 0];
  indices.forEach(
    (at, i) => ([x, y] = [x + someXYs[xIndex(at)], y + someXYs[yIndex(at)]])
  );
  return [x / indices.length, y / indices.length];
};

export { getMeanXY };
