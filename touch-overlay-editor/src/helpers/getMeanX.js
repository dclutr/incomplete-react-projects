import { xIndex } from "./coordinateIndex.js";

const getMeanX = (someXYs, indices) => {
  let x = 0;
  indices.forEach((at, i) => (x = x + someXYs[xIndex(at)]));
  return x / indices.length;
};

export { getMeanX };
