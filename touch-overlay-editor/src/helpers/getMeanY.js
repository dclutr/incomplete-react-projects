import { yIndex } from "./coordinateIndex.js";

const getMeanY = (someXYs, indices) => {
  let y = 0;
  indices.forEach((at, i) => (y = y + someXYs[yIndex(at)]));
  return y / indices.length;
};

export { getMeanY };
