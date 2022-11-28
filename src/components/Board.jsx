import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from './App';
import BoardRow from './BoardRow';
import { BLACK, WHITE, EMPTY } from "./Constants"
import { pawnMoves, bishopMoves, rookMoves, knightMoves, queenMoves, kingMoves } from "./MoveChecker"
import { pawnKills, bishopKills, rookKills, knightKills, queenKills, kingKills } from "./KillChecker"

// import BoardRow from './BoardRow'



function Board() {
    const { board,
        setBoard,
        selectedPiece,
        setSelectedPiece,
        validMovesOnBoard,
        setValidMovesOnBoard,
        validKillsOnBoard,
        setValidKillsOnBoard,
        turn,
        gameCheck,
        setGameCheck,
        gameCheckMate,
        setGameCheckMate
    } = useContext(AppContext);

    // useEffect(() => {




    // }, [])

    const isValidKill = (moves, move) => {
        if (moves) {
            move = JSON.stringify(move);

            let contains = moves.some((e) => {
                return JSON.stringify(e) === move;
            });
            return contains;
        }
    }


    const validMoves = (piece) => {
        if (piece) {
            let { row, index } = piece
            if (row !== null && index !== null) {
                return board[row][index].charAt(1) === "p" ? pawnMoves(piece, board)
                    : board[row][index].charAt(1) === "r" ? rookMoves(piece, board)
                        : board[row][index].charAt(1) === "b" ? bishopMoves(piece, board)
                            : board[row][index].charAt(1) === "n" ? knightMoves(piece, board)
                                : board[row][index].charAt(1) === "q" ? queenMoves(piece, board)
                                    : board[row][index].charAt(1) === "k" ? kingMoves(piece, board)
                                        : [];
            }
        }
    }

    const validKills = (piece) => {
        if (piece) {
            let { row, index } = piece
            if (row !== null && index !== null) {
                return board[row][index].charAt(1) === "p" ? pawnKills(piece, board)
                    : board[row][index].charAt(1) === "r" ? rookKills(piece, board)
                        : board[row][index].charAt(1) === "b" ? bishopKills(piece, board)
                            : board[row][index].charAt(1) === "n" ? knightKills(piece, board)
                                : board[row][index].charAt(1) === "q" ? queenKills(piece, board)
                                    : board[row][index].charAt(1) === "k" ? kingKills(piece, board)
                                        : [];
            }
        }
    }


    useEffect(() => {
        let currentPiece = selectedPiece;
        currentPiece.validMoves = validMoves(selectedPiece);
        currentPiece.validKills = validKills(selectedPiece);
        setSelectedPiece(currentPiece)
        setValidMovesOnBoard(validMoves(selectedPiece))
        setValidKillsOnBoard(validKills(selectedPiece))
        // console.log(validMoves())
    }, [selectedPiece.cell])


    // Check if there is checkmate
    // loop through every non empty element in the board array
    // for every element check if the valid kills contains opposite king "bk" or "wk"
    // if it contains it return true else return false
    // make checkmate state as an object that says which color the checkmate is on

    // board in this case the state board 
    // but paramater of board can be used to see if its checkmate as well
    let checkPieces = [];
    let checkPlayer = EMPTY;
    const checkCheck = (board) => {
        // array containing all the piece that cause check
        //re initialize checkPieces[]
        checkPieces = [];
        checkPlayer = EMPTY;
        let check = board.map((row, rowNum) => {
            let check = row.map((cell, cellIndex) => {
                if (cell !== EMPTY) {
                    let color = cell.charAt(0) === "w" ? WHITE : BLACK;
                    let piece = {
                        row: rowNum,
                        index: cellIndex,
                        cell: cell,
                        color: color
                    }
                    let killsArray = [];
                    killsArray = board[rowNum][cellIndex].charAt(1) === "p" ? pawnKills(piece, board)
                        : board[rowNum][cellIndex].charAt(1) === "r" ? rookKills(piece, board)
                            : board[rowNum][cellIndex].charAt(1) === "b" ? bishopKills(piece, board)
                                : board[rowNum][cellIndex].charAt(1) === "n" ? knightKills(piece, board)
                                    : board[rowNum][cellIndex].charAt(1) === "q" ? queenKills(piece, board)
                                        : board[rowNum][cellIndex].charAt(1) === "k" ? kingKills(piece, board)
                                            : [];
                    // console.log(killsArray);

                    let check = killsArray.map((kills) => {
                        if (board[kills[0]][kills[1]].charAt(1) === "k") {
                            checkPlayer = color;
                            checkPieces.push([rowNum, cellIndex])
                            return true;
                        }
                    })

                    if (check.includes(true)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            })
            if (check.includes(true)) return true;
        });

        if (check.includes(true)) {
            // setGameCheck({ ...gameCheck, piece: [checkPieces] })
            return true;
        } else {
            //set the pieces causing check to be empty if there is no check
            return false;
        }
    }


    let piecesToKillCheck = [];
    const checkCheckMate = () => {
        if (gameCheck.check) {
            piecesToKillCheck = [];
            let king = gameCheck.player === WHITE ? "bk" : "wk";
            let kingPos = [];
            board.map((row, rowNum) => {
                row.map((cell, index) => {
                    if (cell === king) {
                        kingPos = [rowNum, index]
                    }
                })
            })
            let kingPiece = {
                row: kingPos[0],
                index: kingPos[1],
                color: gameCheck.player
            }
            console.log(kingPiece)
            let kingPossibleMoves = kingMoves(kingPiece, board)

            let checkMate = true;
            kingPossibleMoves.map((move) => {
                let tempBoard = JSON.parse(JSON.stringify(board))
                tempBoard[move[0]][move[1]] = king;
                tempBoard[kingPos[0]][kingPos[1]] = EMPTY
                if (!checkCheck(tempBoard)) {
                    checkMate = false;
                }
            })
            // need to check which piece is currently causing checkmate

            // need to check if the current checkmate is blockable
            board.map((row, rowNum) => {
                row.map((cell, index) => {
                    let color = gameCheck.player === BLACK ? "w" : "b";
                    if (board[rowNum][index].charAt(0) === color) {
                        let piece = {
                            row: rowNum,
                            index: index,
                            color: color === "w" ? WHITE : BLACK
                        }
                        let piecePossibleMoves = validMoves(piece);
                        piecePossibleMoves.map((move) => {
                            let tempBoard = JSON.parse(JSON.stringify(board))
                            tempBoard[move[0]][move[1]] = board[rowNum][index];
                            tempBoard[rowNum][index] = EMPTY;
                            if (!checkCheck(tempBoard)) {
                                checkMate = false;
                            }
                        })
                    }
                })
            })


            gameCheck.pieces.map((piecePos) => {
                if (board[piecePos[0]][piecePos[1]].charAt(0) === "b") {
                    board.map((row, rowNum) => {
                        row.map((cell, cellIndex) => {
                            if (board[rowNum][cellIndex].charAt(0) === "w") {
                                let color = WHITE;
                                let piece = {
                                    row: rowNum,
                                    index: cellIndex,
                                    cell: cell,
                                    color: color
                                }
                                let killsArray = [];
                                killsArray = validKills(piece)

                                if (isValidKill(killsArray, [piecePos[0], piecePos[1]])) {
                                    piecesToKillCheck.push([rowNum, cellIndex])
                                }
                            }
                        })
                    })
                } else if (board[piecePos[0]][piecePos[1]].charAt(0) === "w") {
                    board.map((row, rowNum) => {
                        row.map((cell, cellIndex) => {
                            if (board[rowNum][cellIndex].charAt(0) === "b") {
                                let color = WHITE;
                                let piece = {
                                    row: rowNum,
                                    index: cellIndex,
                                    cell: cell,
                                    color: color
                                }
                                let killsArray = [];
                                killsArray = validKills(piece)

                                if (isValidKill(killsArray, [piecePos[0], piecePos[1]])) {
                                    piecesToKillCheck.push([rowNum, cellIndex])
                                }
                            }
                        })
                    })
                }
            })
            // then need to check if that piece is currently in any players kills
            // if it is then its not checkmate only CHECK
            // otherwise its checkmate
            console.log("Checkmate: ", checkMate)
            return checkMate;
        }
    }

    // checks if there is checkmate everytime a player has check
    useEffect(() => {
        // every time a new piece causes check
        // it checks if there is checkmate and returns all the possible
        // players that can kill the piece causing check
        // later do a check to see if there is check AND the piecestokillcheck is empty
        // that will mean the game is over
        checkCheckMate()
        setGameCheck({
            ...gameCheck,
            piecesToKillCheck: piecesToKillCheck
        })



        // need to check if game is over by checking if the king is 
        // in the valid kills of all the pieces causing check 
        // if not all pieces then game is not over
        // if checkCheckMate() returns true need to

        // 2nd thought
        // if checkCheckMate() returns true that means game is over
        // if the pieces causing check is only 1 AND that piece is killable then game not over
        if (gameCheck.check && checkCheckMate() && piecesToKillCheck.length === 0) {
            console.log("GAME IS OVER")
            setGameCheckMate({ winner: gameCheck.player })
        } else {
            console.log('game not over')
        }
    }, [gameCheck.pieces])

    // tempBoard[0][0] = EMPTY
    // console.log(tempBoard)
    // console.log(board)



    // check if there is check every turn
    // return true if a player has check
    useEffect(() => {
        if (checkCheck(board)) {
            setGameCheck({
                player: checkPlayer,
                check: true,
                pieces: checkPieces,
                piecesToKillCheck: piecesToKillCheck
            });

        } else {
            setGameCheck({
                player: EMPTY,
                check: false,
                pieces: [],
                piecesToKillCheck: []
            });
        }

    }, [turn])





    return (
        <div className='board'>
            {board.map((number, index) => (
                <BoardRow
                    key={index}
                    row={index} />
            ))}
        </div>
    )
}

export default Board