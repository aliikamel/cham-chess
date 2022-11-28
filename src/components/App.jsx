import React, { createContext, useState } from "react"
import ReactDOM from "react-dom"
import Board from "./Board"
import './App.css'
import { initialBoard } from "./Game"
import { BLACK, WHITE, EMPTY } from "./Constants"



export const AppContext = createContext();

function App() {
    const [board, setBoard] = useState(initialBoard)
    const [turn, setTurn] = useState(WHITE);
    const [validMovesOnBoard, setValidMovesOnBoard] = useState([]);
    const [validKillsOnBoard, setValidKillsOnBoard] = useState([]);
    const [selectedPiece, setSelectedPiece] = useState({
        piece: "",
        row: null,
        index: null,
        color: "",
        validMoves: [],
        validKills: [],
        // moved: false
    })

    // state for seeing if a player has check over another
    // player is the player that has check over them( IDT SO)
    // piece is an array containing the positions of all the pieces causing check
    const [gameCheck, setGameCheck] = useState({
        player: EMPTY,
        check: false,
        pieces: [],
        piecesToKillCheck: [],
    })
    const [gameCheckMate, setGameCheckMate] = useState({
        winner: EMPTY,
    })

    return (
        <div className="main-container">
            <nav>
                <h1 className="title">YUURRR CHAM CHESS GAME</h1>
            </nav>
            {gameCheckMate.winner === EMPTY
                ? <h1 style={{ color: turn }}>{turn.toUpperCase() + "'s Turn"}</h1>
                : <h1 style={{ color: gameCheckMate.winner }}>{gameCheckMate.winner.toUpperCase() + " Wins"}</h1>}

            {gameCheck.check && <h2>{(gameCheck.player === WHITE ? BLACK : WHITE).toUpperCase() + " KING IS ATTACKED"}</h2>}
            <div className="container">
                <div className="num-label">
                    <h2>8</h2>
                    <h2>7</h2>
                    <h2>6</h2>
                    <h2>5</h2>
                    <h2>4</h2>
                    <h2>3</h2>
                    <h2>2</h2>
                    <h2>1</h2>
                </div>
                <AppContext.Provider
                    value={{
                        board,
                        setBoard,
                        turn,
                        setTurn,
                        selectedPiece,
                        setSelectedPiece,
                        validMovesOnBoard,
                        setValidMovesOnBoard,
                        validKillsOnBoard,
                        setValidKillsOnBoard,
                        gameCheck,
                        setGameCheck,
                        gameCheckMate,
                        setGameCheckMate
                    }}
                >
                    <Board />
                </AppContext.Provider>
                <div className="letter-label">
                    <h2>a</h2>
                    <h2>b</h2>
                    <h2>c</h2>
                    <h2>d</h2>
                    <h2>e</h2>
                    <h2>f</h2>
                    <h2>g</h2>
                    <h2>h</h2>
                </div>
            </div>

        </div>
    )
}

export default App

