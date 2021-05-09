import l from "../img/l.png";
import r from "../img/r.png";
import l2 from "../img/l2.png";
import r2 from "../img/r2.png";
import up from "../img/up.png";
import down from "../img/down.png";
import left from "../img/left.png";
import leftUp from "../img/leftup.png";
import leftDown from "../img/leftdown.png";
import right from "../img/right.png";
import rightUp from "../img/rightup.png";
import rightDown from "../img/rightdown.png";
import select from "../img/select.png";
import start from "../img/start.png";
import x from "../img/x.png";
import y from "../img/y.png";
import a from "../img/a.png";
import b from "../img/b.png";
import menuToggle from "../img/menu_toggle.png";

//prettier-ignore
const mappings = [
  //SHOULDER BUTTONS
  "l",    "r",
  "l2",  "r2",
  //D-PAD
  "left|up",   "up",    "right|up",
  "left",               "right",
  "left|down", "down",  "right|down",
  //BUTTONS
  "x","y","a","b",
  //OTHERS
  "select","menu_toggle","start",
];
//prettier-ignore
const images = [
  //SHOULDER BUTTONS
  l,      r,
  l2,    r2,
  //D-PAD
  leftUp,       up,      rightUp,
  left,                  right,
  leftDown,     down,    rightDown,
  //BUTTONS
      x,
   y,    a,
      b,
  //OTHERS
  select, menuToggle, start,
];
//prettier-ignore
const positions = [
  //SHOULDER BUTTONS
  30,15,      450,15,
  30,42,      450,42,
  //D-PAD
  50,80,      80,80,     110,80,
  50,110,                110,110,
  50,140,     80,140,    110,140,
  //BUTTONS
              400,80,
  370,110,               430,110,
              400,140,
  //OTHERS
  200,250,    240,250,   280,250,
];
//prettier-ignore
const sizes = [
  //SHOULDER BUTTONS
  60,30,      60,30,
  60,30,      60,30,
  //D-PAD
  30,30,     60,60,      30,30,
  60,60,                 60,60,
  30,30,     60,60,      30,30,
  //BUTTONS
             40,40,
  40,40,                 40,40,
             40,40,
  //OTHERS
  30,30,     30,30,       30,30,
];
//prettier-ignore
const types = [
  //SHOULDER BUTTONS
  "rect",    "rect",
  "rect",    "rect",
  //D-PAD
  "rect",   "radial",   "rect",
  "radial",             "radial",
  "rect",   "radial",   "rect",
  //BUTTONS
  "radial","radial","radial","radial",
  //OTHERS
  "rect","rect","rect",
];

export { mappings, images, positions, sizes, types };
