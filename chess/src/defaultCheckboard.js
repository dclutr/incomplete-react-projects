// prettier-ignore
/*const pieces = [
  '♜' ,'♞' ,'♝' ,'♛' ,'♚' ,'♝' ,'♞' ,'♜' ,
  '♟' ,'♟' ,'♟' ,'♟' ,'♟' ,'♟' ,'♟' ,'♟' ,
  null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,
  '♙' ,'♙' ,'♙' ,'♙' ,'♙' ,'♙' ,'♙' ,'♙' ,
  '♖' ,'♘' ,'♗' ,'♕' ,'♔' ,'♗' ,'♘' ,'♖' ,
];*/

// prettier-ignore
const pieces = [
  ['♜' ,'♞' ,'♝' ,'♛' ,'♚' ,'♝' ,'♞' ,'♜' ,],
  ['♟' ,'♟' ,'♟' ,'♟' ,null,null,'♟' ,'♟' ,],
  [null,null,null,null,'♟' ,null,null,null,],
  ['♙' ,null,'♙' ,'♙' ,null,null,null,null,],
  ['♖' ,null,null,null,null,'♟' ,null,null,],
  [null,null,null,null,null,null,null,null,],
  [null,'♙' ,null,null,'♙' ,'♙' ,'♙' ,'♙' ,],
  [null,'♘' ,'♗' ,'♕' ,'♔' ,'♗' ,'♘' ,'♖' ,],
];

// prettier-ignore
const colours = [
  ["white","grey","white","grey","white","grey","white","grey",],
  ["grey","white","grey","white","grey","white","grey","white",],
  ["white","grey","white","grey","white","grey","white","grey",],
  ["grey","white","grey","white","grey","white","grey","white",],
  ["white","grey","white","grey","white","grey","white","grey",],
  ["grey","white","grey","white","grey","white","grey","white",],
  ["white","grey","white","grey","white","grey","white","grey",],
  ["grey","white","grey","white","grey","white","grey","white",],
];

// prettier-ignore
const moves = [
  [false,false,false,false,false,false,false,false,],
  [false,false,false,false,false,false,false,false,],
  [false,false,false,false,false,false,false,false,],
  [false,false,false,false,false,false,false,false,],
  [false,false,false,false,false,false,false,false,],
  [false,false,false,false,false,false,false,false,],
  [false,false,false,false,false,false,false,false,],
  [false,false,false,false,false,false,false,false,],
];

export { pieces, colours, moves };
