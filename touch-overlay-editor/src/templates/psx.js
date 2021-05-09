//prettier-ignore
const buttonNames = [
  //SHOULDER BUTTONS
  "L1",  "R1",
  "L2",  "R2",
  //D-PAD
  "↖", "↑", "↗",
  "←",      "→",
  "↙", "↓", "↘",
  //BUTTONS
       "△",
  "□",     "○",
       "✕",
  //OTHERS
  "▭","MENU TOGGLE","▻",
];

//prettier-ignore
const buttonMenu = [
  //SHOULDER BUTTONS
  [0,              1],
  [2,              3],
  //D-PAD
  [4,        5,       6 ],
  [7,                 8 ],
  [9,        10,      11],
  //BUTTONS
      [12],
  [13,     14],
      [15],
  //OTHERS
  [16, 17, 18],
];

const buttonHelpers = [
  ["L1+R1", 0, 1],
  ["L2+R2", 2, 3],
  ["D-PAD", 5, 4, 7, 9, 10, 11, 8, 6],
  ["BUTTON-PAD", 12, 13, 15, 14],
  ["OTHERS", 16, 17, 18],
];

export { buttonNames, buttonMenu, buttonHelpers };
