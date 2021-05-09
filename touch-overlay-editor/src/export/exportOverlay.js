import {
  mappings as defaultMappings,
  types as defaultTypes,
} from "../templates/retropad.js";

import { xIndex, yIndex } from "../helpers/coordinateIndex.js";

const exportOverlay = ([positions, sizes, resolution]) => {
  let overlay =
    "overlays = 1\n" +
    "\n" +
    "overlay0_full_screen = true\n" +
    "overlay0_normalized = true\n" +
    'overlay0_name = "landscape"\n' +
    "overlay0_range_mod = 1.5\n" +
    "overlay0_alpha_mod = 2.0\n" +
    "overlay0_descs = " +
    defaultMappings.length +
    "\n";
  defaultMappings.forEach((item, at) => {
    overlay =
      overlay +
      "overlay0_desc" +
      at +
      ' = "' +
      defaultMappings[at] +
      "," +
      parseFloat(positions[xIndex(at)] / resolution[0]) +
      "," +
      parseFloat(positions[yIndex(at)] / resolution[1]) +
      "," +
      defaultTypes[at] +
      "," +
      parseFloat((0.5 * sizes[xIndex(at)]) / resolution[0]) +
      "," +
      parseFloat((0.5 * sizes[yIndex(at)]) / resolution[1]) +
      '"\n' +
      "overlay0_desc" +
      at +
      "_overlay = " +
      defaultMappings[at].replace("|", "") +
      ".png\n";
  });

  alert(overlay);
};

export { exportOverlay };
