import React, {useContext} from 'react'
import BoardCell from './BoardCell'
import { AppContext } from './App';
import { BLACK, WHITE } from "./Constants"



function BoardRow({row}) {
    const { board, setBoard } = useContext(AppContext);
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const boardY = [8, 7, 6, 5, 4, 3, 2, 1];


    return (
        <div className='boardrow' id={row}>
            {board[row].map((letter, index) => (
                <BoardCell
                    key={letters[index] + boardY[row]}
                    cell={letters[index] + boardY[row]}
                    letter={letters[index]}
                    realCell={letters[index] + row}
                    // the index of the row so top row is 0
                    cellRow={row}
                    index={index}
                    // color={""}
                />
            ))}
        </div>
    )
}

export default BoardRow