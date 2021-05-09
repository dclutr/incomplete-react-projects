import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  pieces as defaultPieces,
  colours as defaultColours,
  moves as noValidMoves,
} from "./defaultCheckboard";

//Helpers-START
const pickedColour = "orange";
const moveColour = "green";
const pieceColour = (piece) =>
  piece >= "♚" ? "black" : piece >= "♔" ? "white" : null;
const isValidPosition = (row, column) =>
  row < 8 && row > -1 && column < 8 && column > -1;
const invalidPick = () => alert("Invalid Pick");
const invalidMove = () => alert("Invalid Move");
//Helpers-END

function Square(props) {
  return (
    <button
      className="square"
      onClick={() => {
        props.handleClick(props.position);
      }}
      style={{
        background: props.colour,
      }}
    >
      {props.piece}
    </button>
  );
}

function Game() {
  const [playerColour, setPlayerColour] = useState("white");
  const [pieces, setPieces] = useState(defaultPieces);
  const [isAPiecePicked, setIsAPiecePicked] = useState(false);
  const [pickedPiecePosition, setPickedPiecePosition] = useState(-1);
  const [validMoves, setValidMoves] = useState(noValidMoves);

  const isPlayersPiece = (piece) =>
    piece ? playerColour === pieceColour(piece) : false;

  const pickPiece = ([row, column]) => {
    setIsAPiecePicked(true);
    setPickedPiecePosition(8 * row + column);
    calculateMoves(row, column);
  };

  const isPeacefulMove = (row, column) =>
    isValidPosition(row, column) && !pieces[row][column] ? true : false;

  const isKillingMove = (row, column) =>
    isValidPosition(row, column) &&
    pieceColour(pieces[row][column]) && //No piece!
    pieceColour(pieces[row][column]) !== playerColour
      ? true
      : false;

  const calculateMoves = (row, column) => {
    const newValidMoves = [[], [], [], [], [], [], [], []];
    for (let counter1 = 0; counter1 < 8; counter1++)
      for (let counter2 = 0; counter2 < 8; counter2++)
        newValidMoves[counter1][counter2] = noValidMoves[counter1][counter2];

    if (pieces[row][column] === "♙" || pieces[row][column] === "♟") {
      //PAWN
      let pawnDirection = playerColour === "black" ? +1 : -1;
      if (isPeacefulMove(row + 1 * pawnDirection, column + 0)) {
        //1-step
        newValidMoves[row + 1 * pawnDirection][column + 0] = true;
        if (
          ((pawnDirection === +1 && row === 1) ||
            (pawnDirection === -1 && row === 6)) &&
          isPeacefulMove(row + 2 * pawnDirection, column + 0)
        ) {
          //2-steps
          newValidMoves[row + 2 * pawnDirection][column + 0] = true;
        }
      }
      [-1, +1].forEach((w) => {
        if (isKillingMove(row + 1 * pawnDirection, column + w)) {
          //diagonal attacks
          newValidMoves[row + 1 * pawnDirection][column + w] = true;
        }
      });
    } else if (pieces[row][column] === "♖" || pieces[row][column] === "♜") {
      //ROOK
      //prettier-ignore
      [        [-1, 0],
       [ 0,-1],        [ 0,+1],
               [+1, 0],        ]
      .forEach((direction) => {
          moveRecursively([row, column], [direction[0], direction[1]])
          .forEach((validMove) => {
             newValidMoves[validMove[0]][validMove[1]] = true;
          });
      });
    } else if (pieces[row][column] === "♘" || pieces[row][column] === "♞") {
      //KNIGHT
      //prettier-ignore
      [         [-2,-1],        [-2,+1],
        [-1,-2],                        [-1,+2],

        [+1,-2],                        [+1,+2],
                [+2,-1],        [+2,+1],        ]
      .forEach((direction) => {
          moveRecursively([row, column], [direction[0], direction[1]], 1)
          .forEach((validMove) => {
             newValidMoves[validMove[0]][validMove[1]] = true;
          });
      });
    } else if (pieces[row][column] === "♗" || pieces[row][column] === "♝") {
      //BISHOP
      //prettier-ignore
      [[-1,-1],     [-1,+1],

       [+1,-1],     [+1,+1],]
      .forEach((direction) => {
          moveRecursively([row, column], [direction[0], direction[1]])
          .forEach((validMove) => {
             newValidMoves[validMove[0]][validMove[1]] = true;
          });
      });
    } else if (pieces[row][column] === "♕" || pieces[row][column] === "♛") {
      //QUEEN
      //prettier-ignore
      [[-1,-1],[-1, 0],[-1,+1],
       [ 0,-1],        [ 0,+1],
       [+1,-1],[+1, 0],[+1,+1],]
      .forEach((direction) => {
          moveRecursively([row, column], [direction[0], direction[1]])
          .forEach((validMove) => {
             newValidMoves[validMove[0]][validMove[1]] = true;
           });
      });
    } else if (pieces[row][column] === "♔" || pieces[row][column] === "♚") {
      //KING
      alert("Castling not programmed yet");
      //prettier-ignore
      [[-1,-1],[-1, 0],[-1,+1],
       [ 0,-1],        [ 0,+1],
       [+1,-1],[+1, 0],[+1,+1],]
      .forEach((direction) => {
          moveRecursively([row, column], [direction[0], direction[1]], 1)
          .forEach((validMove) => {
             newValidMoves[validMove[0]][validMove[1]] = true;//1-step move
          });
      });
    } else {
      alert("you have clicked on a piece that does not exist");
    }

    setValidMoves(newValidMoves);
  };

  const moveRecursively = (
    [row, column],
    [hDirection, wDirection],
    limit = 8
  ) => {
    const moves = [];
    for (
      let h = row + hDirection, w = column + wDirection, steps = 0;
      isValidPosition(h, w) && steps < limit;
      h = h + hDirection, w = w + wDirection, steps = steps + 1
    ) {
      if (isValidPosition(h, w)) {
        if (isPeacefulMove(h, w)) {
          moves.push([h, w]);
          continue;
        } else if (isKillingMove(h, w)) {
          moves.push([h, w]);
        } //else it is blocked by the player's own pieces
      }
      break;
    }
    return moves;
  };

  const movePieceTo = ([row, column]) => {
    const pickedPieceRow = parseInt(pickedPiecePosition / 8);
    const pickedPieceColumn = pickedPiecePosition % 8;

    if (8 * row + column !== pickedPiecePosition) {
      //moving to another square
      const newPieces = [[], [], [], [], [], [], [], []];
      for (let counter1 = 0; counter1 < 8; counter1++)
        for (let counter2 = 0; counter2 < 8; counter2++)
          newPieces[counter1][counter2] = pieces[counter1][counter2];
      newPieces[row][column] = pieces[pickedPieceRow][pickedPieceColumn];
      newPieces[pickedPieceRow][pickedPieceColumn] = null;
      setPieces(newPieces);
      setPlayerColour(playerColour === "white" ? "black" : "white");
    } //else moving to the same square/cancelling the move
    setIsAPiecePicked(false);
  };

  if (!isAPiecePicked) {
    //If no piece has been picked
    return (
      <>
        <p>{"Player " + playerColour + "'s turn"}</p>
        <table style={{ border: "2px dashed green" }}>
          {Array.from({ length: 8 }, (v, i) => i).map((row) => (
            <tr>
              {Array.from({ length: 8 }, (v, i) => i).map((column) => (
                <td>
                  <Square
                    position={[row, column]}
                    piece={pieces[row][column]}
                    colour={defaultColours[row][column]}
                    handleClick={
                      isPlayersPiece(pieces[row][column])
                        ? pickPiece
                        : invalidPick
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </table>
      </>
    );
  } else {
    //If a piece has been picked
    return (
      <>
        <p>{"Player " + playerColour + "'s turn"}</p>
        <table style={{ border: "2px dashed green" }}>
          {Array.from({ length: 8 }, (v, i) => i).map((row) => (
            <tr>
              {Array.from({ length: 8 }, (v, i) => i).map((column) => (
                <td>
                  <Square
                    position={[row, column]}
                    piece={pieces[row][column]}
                    colour={
                      pickedPiecePosition === 8 * row + column
                        ? pickedColour
                        : validMoves[row][column]
                        ? moveColour
                        : defaultColours[row][column]
                    }
                    handleClick={
                      pickedPiecePosition === 8 * row + column ||
                      validMoves[row][column]
                        ? movePieceTo
                        : isPlayersPiece(pieces[row][column])
                        ? pickPiece
                        : invalidMove
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </table>
      </>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
