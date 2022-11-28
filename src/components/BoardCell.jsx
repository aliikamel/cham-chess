import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from './App'
import { BLACK, WHITE } from "./Constants"
import { pawnMoves, rookMoves, bishopMoves } from "./MoveChecker"


function BoardCell({ cell, letter, cellRow, index, realCell }) {

    const {
        board,
        setBoard,
        selectedPiece,
        setSelectedPiece,
        turn,
        setTurn,

        // to see the current valid moves of a selected piece
        validMovesOnBoard,
        setValidMovesOnBoard
    } = useContext(AppContext)

    const colors = ["dark", "light"]
    var colorClass = "";
    const [piece, setPiece] = useState("")
    // const [moved, setMoved] = useState(false);
    const [validMoveCellClass, setValidMoveCellClass] = useState(false)

    //do image with usestate
    // const [selectedPiece, setSelectedPiece] = useState(null);
    // const [hasPiece, setHasPiece] = useState(false);


    // set initial piece for each board
    useEffect(() => {
        setPiece(board[cellRow][index])
    }, [turn])


    // Setting the cell color
    if (cellRow % 2 == 0) {
        if (index % 2 == 0) colorClass = colors[1];
        else colorClass = colors[0];
    } else if (cellRow % 2 != 0) {
        if (index % 2 == 0) colorClass = colors[0];
        else colorClass = colors[1];
    }

    // Setting the cell color of the cell that is constant
    var cellClass = "board-cell " + colorClass

    // Setting the img of the cell if it has a piece depending on state
    var img = "./icons/" + piece + ".png";

    const handleClick = () => {
        // to move piece
        if (board[cellRow][index] === ""
            && selectedPiece.color === turn
            && selectedPiece.piece !== ""
            && isValidMove(selectedPiece.validMoves, [cellRow, index])) {

            movePiece();
        }

        // to select a piece on the board
        if (board[cellRow][index] !== "") {
            let pieceColor = board[cellRow][index].charAt(0) === "b" ? BLACK : WHITE;
            let opponent = pieceColor === WHITE ? "b" : "w"
            // console.log(pieceColour)
            if (pieceColor === turn) {
                setSelectedPiece({
                    cell: cell,
                    piece: board[cellRow][index],
                    row: cellRow,
                    index: index,
                    color: pieceColor,
                    validMoves: [],
                    validKills: []
                })
            }
        }

        // to make a kill 
        // if a piece is already selected and click on opponents piece
        if (board[cellRow][index] !== "" && selectedPiece.color === turn) {

            // checking if the selected piece is the opponents color
            let opponent = selectedPiece.color === WHITE ? "b" : "w"
            if (board[cellRow][index].charAt(0) === opponent
                && isValidKill(selectedPiece.validKills, [cellRow, index])) {

                killPiece();
            }
        }

    }




    // Checks if the selected Move is valid
    const isValidMove = (moves, move) => {
        if (moves) {
            move = JSON.stringify(move);

            let contains = moves.some((e) => {
                return JSON.stringify(e) === move;
            });
            // console.log(contains)
            return contains;
        }
    }

    // same exact functionality as above function but different name
    // Checks if the selected kill is valid
    const isValidKill = (moves, move) => {
        if (moves) {
            move = JSON.stringify(move);

            let contains = moves.some((e) => {
                return JSON.stringify(e) === move;
            });
            console.log(contains)
            return contains;
        }
    }

    const movePiece = () => {
        let newBoard = board;
        // Setting selected empty cell to be a piece
        newBoard[cellRow][index] = selectedPiece.piece;

        // Setting selected piece to be empty after moving
        newBoard[selectedPiece.row][selectedPiece.index] = "";

        setBoard(newBoard);
        // setMoved(true);
        // setSelectedPiece({
        //     piece: "",
        //     row: null,
        //     index: null,
        //     color: "",
        //     validMoves: [],
        //     moved: false
        // })

        setTurn(turn === WHITE ? BLACK : WHITE)
    }

    const killPiece = () => {
        let newBoard = board;
        // Setting selected opponent piece to be a replaced by player piece
        newBoard[cellRow][index] = selectedPiece.piece;

        // Setting selected piece to be empty after moving
        newBoard[selectedPiece.row][selectedPiece.index] = "";

        setBoard(newBoard);
        setTurn(turn === WHITE ? BLACK : WHITE)
    }

    return (
        // {props.letter} row={props.number} index={props.index}
        <div onClick={handleClick} id={realCell} value={piece} className={cellClass}>
            <div className={
                (isValidMove(validMovesOnBoard, [cellRow, index]) ? "validMove" : "") +
                ' piece-div ' + (selectedPiece.row === cellRow ? (selectedPiece.index === index ? "clickedPiece" : "") : "")}>
                <img id={cell} value={piece} src={piece != "" ? img : ""} />
            </div>
        </div>
    )
}

export default BoardCell



// alt={piece != "" ? img : ""} 