import { replaceXY } from "./replaceXY.js";
import { getMeanXY } from "./getMeanXY.js";
import { xIndex, yIndex } from "./coordinateIndex.js";

const replaceXYs = (oldXYs, atList, [x, y], mode, factor = 1) => {
  let newXYs = oldXYs;
  if (mode === "move") {
    const [xMean, yMean] = getMeanXY(oldXYs, atList);
    atList.forEach((at, i) => {
      newXYs = replaceXY(newXYs, at, [
        x + oldXYs[xIndex(at)] - xMean,
        y + oldXYs[yIndex(at)] - yMean,
      ]);
    });
  } else if (mode === "moveToCentre") {
    const [xMean] = getMeanXY(oldXYs, atList);
    atList.forEach((at, i) => {
      newXYs = replaceXY(newXYs, at, [
        x + oldXYs[xIndex(at)] - xMean,
        oldXYs[yIndex(at)],
      ]);
    });
  } else if (mode === "radius") {
    const [xMean, yMean] = getMeanXY(oldXYs, atList);
    atList.forEach((at, i) => {
      newXYs = replaceXY(newXYs, at, [
        xMean + factor * (oldXYs[xIndex(at)] - xMean),
        yMean + factor * (oldXYs[yIndex(at)] - yMean),
      ]);
    });
  } else if (mode === "circle") {
    const [xMean, yMean] = getMeanXY(oldXYs, atList);
    const radius = oldXYs[yIndex(atList[0])] - yMean;
    const divisions = atList.length;
    for (let i = 0; i < divisions; i++) {
      newXYs = replaceXY(newXYs, atList[i], [
        xMean + radius * Math.sin((i / divisions) * 2 * Math.PI),
        yMean + radius * Math.cos((i / divisions) * 2 * Math.PI),
      ]);
    }
  } else if (mode === "scale") {
    atList.forEach((at, i) => {
      newXYs = replaceXY(newXYs, at, [
        oldXYs[xIndex(at)] + x,
        oldXYs[yIndex(at)] + y,
      ]);
    });
  } else if (mode === "equalizeSize") {
    const [xMean, yMean] = getMeanXY(oldXYs, atList);
    atList.forEach((at, i) => {
      newXYs = replaceXY(newXYs, at, [xMean, yMean, oldXYs[yIndex(at)] + y]);
    });
  }
  return newXYs;
};

export { replaceXYs };
