import { xIndex } from "./coordinateIndex.js";

const replaceXY = (oldXYs, at, [x, y]) => {
  return oldXYs
    .slice(0, xIndex(at))
    .concat([x, y].concat(oldXYs.slice(xIndex(at + 1), oldXYs.length)));
};

export { replaceXY };
