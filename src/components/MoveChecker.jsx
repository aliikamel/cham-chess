import { BLACK, WHITE, EMPTY } from "./Constants"



export const pawnMoves = (pawn, board) => {
    // check if pawn has moved already
    let pawnMoves = [];

    // pawn = pawn.selectedPiece;


    if (pawn.color === BLACK && pawn.row === 1) {
        for (let i = 1; i < 3; i++) {
            board[pawn.row + i][pawn.index] === EMPTY
                && pawnMoves.push([i + pawn.row, pawn.index])
        }
    } else if (pawn.color === WHITE && pawn.row === 6) {
        for (let i = 1; i < 3; i++) {
            board[pawn.row - i][pawn.index] === EMPTY
                && pawnMoves.push([pawn.row - i, pawn.index])
        }
    } else if (pawn.color === BLACK && pawn.row < 7) {
        board[pawn.row + 1][pawn.index] === EMPTY
            && pawnMoves.push([1 + pawn.row, pawn.index])
    } else if (pawn.color === WHITE && pawn.row > 0) {
        board[pawn.row - 1][pawn.index] === EMPTY
            && pawnMoves.push([pawn.row - 1, pawn.index])
    }
    return pawnMoves;
}


export const rookMoves = (rook, board) => {
    // check if pawn has moved already
    let rookMoves = [];

    // rook = rook.selectedPiece;

    // console.log(board[rook.row-2][rook.index])
    if (rook.row !== null) {

        // up vertical moves
        for (let i = 0; i <= rook.row; i++) {
            if (board[rook.row - i][rook.index] !== EMPTY && i !== 0) { break };
            board[rook.row - i][rook.index] === EMPTY
                && rookMoves.push([rook.row - i, rook.index])
        }

        // down vertical moves 
        for (let i = 0; i < board.length - rook.row; i++) {
            if (board[rook.row + i][rook.index] !== EMPTY && i !== 0) { break };
            board[rook.row + i][rook.index] === EMPTY
                && rookMoves.push([rook.row + i, rook.index])
        }

        // right moves
        for (let i = 0; i < board.length - rook.index; i++) {
            if (board[rook.row][rook.index + i] !== EMPTY && i !== 0) { break };
            board[rook.row][rook.index + i] === EMPTY
                && rookMoves.push([rook.row, rook.index + i])
        }

        // left moves
        for (let i = 0; i <= rook.index; i++) {
            if (board[rook.row][rook.index - i] !== EMPTY && i !== 0) { break };
            board[rook.row][rook.index - i] === EMPTY
                && rookMoves.push([rook.row, rook.index - i])
        }
    }
    return rookMoves;
}





export const bishopMoves = (bishop, board) => {
    // check if pawn has moved already
    let bishopMoves = [];

    // bishop = bishop.selectedPiece;

    // console.log(board[rook.row-2][rook.index])
    if (bishop.row !== null) {

        // up-right diagonal moves
        for (let i = 0; i < board.length; i++) {
            if ((0 <= (bishop.row - i) && (bishop.row - i) < 8) && (0 <= (bishop.index + i) && (bishop.index + i) < 8)) {
                if (board[bishop.row - i][bishop.index + i] !== EMPTY && i !== 0) { break };
                board[bishop.row - i][bishop.index + i] === EMPTY
                    && bishopMoves.push([bishop.row - i, bishop.index + i])
            }
        }

        // down-right diagonal moves 
        for (let i = 0; i < board.length; i++) {
            if ((0 <= (bishop.row + i) && (bishop.row + i) < 8) && (0 <= (bishop.index + i) && (bishop.index + i) < 8)) {
                if (board[bishop.row + i][bishop.index + i] !== EMPTY && i !== 0) { break };
                board[bishop.row + i][bishop.index + i] === EMPTY
                    && bishopMoves.push([bishop.row + i, bishop.index + i])
            }
        }

        // up-left diagonal moves
        for (let i = 0; i <= bishop.index; i++) {
            if ((0 <= (bishop.row - i) && (bishop.row - i) < 8) && (0 <= (bishop.index - i) && (bishop.index - i) < 8)) {
                if (board[bishop.row - i][bishop.index - i] !== EMPTY && i !== 0) { break };
                board[bishop.row - i][bishop.index - i] === EMPTY
                    && bishopMoves.push([bishop.row - i, bishop.index - i])
            }
        }

        // down-left diagonal moves
        for (let i = 0; i <= bishop.index; i++) {
            if ((0 <= (bishop.row + i) && (bishop.row + i) < 8) && (0 <= (bishop.index - i) && (bishop.index - i) < 8)) {
                if (board[bishop.row + i][bishop.index - i] !== EMPTY && i !== 0) { break };
                board[bishop.row + i][bishop.index - i] === EMPTY
                    && bishopMoves.push([bishop.row + i, bishop.index - i])
            }
        }
    }
    return bishopMoves;
}


export const knightMoves = (knight, board) => {
    let knightMoves = [];

    // knight = knight.selectedPiece;
// 
    // console.log(board[rook.row-2][rook.index])

    if (knight.row !== null) {



        // Left side moves
        // top left top move
        if ((0 <= (knight.row - 2) && (knight.row - 2) < 8) && (0 <= (knight.index - 1) && (knight.index - 1) < 8)) {
            board[knight.row - 2][knight.index - 1] === EMPTY
                && knightMoves.push([knight.row - 2, knight.index - 1])
        }

        // top left bottom move
        if ((0 <= (knight.row - 1) && (knight.row - 1) < 8) && (0 <= (knight.index - 2) && (knight.index - 2) < 8)) {
            board[knight.row - 1][knight.index - 2] === EMPTY
                && knightMoves.push([knight.row - 1, knight.index - 2])
        }

        // bottom left top move
        if ((0 <= (knight.row + 1) && (knight.row + 1) < 8) && (0 <= (knight.index - 2) && (knight.index - 2) < 8)) {
            board[knight.row + 1][knight.index - 2] === EMPTY
                && knightMoves.push([knight.row + 1, knight.index - 2])
        }

        // bottom left bottom move
        if ((0 <= (knight.row + 2) && (knight.row + 2) < 8) && (0 <= (knight.index - 1) && (knight.index - 1) < 8)) {
            board[knight.row + 2][knight.index - 1] === EMPTY
                && knightMoves.push([knight.row + 2, knight.index - 1])
        }

        // Right side moves
        // top right top move
        if ((0 <= (knight.row - 2) && (knight.row - 2) < 8) && (0 <= (knight.index + 1) && (knight.index + 1) < 8)) {
            board[knight.row - 2][knight.index + 1] === EMPTY
                && knightMoves.push([knight.row - 2, knight.index + 1])
        }

        // top right bottom move
        if ((0 <= (knight.row - 1) && (knight.row - 1) < 8) && (0 <= (knight.index + 2) && (knight.index + 2) < 8)) {
            board[knight.row - 1][knight.index + 2] === EMPTY
                && knightMoves.push([knight.row - 1, knight.index + 2])
        }

        // bottom right top move
        if ((0 <= (knight.row + 1) && (knight.row + 1) < 8) && (0 <= (knight.index + 2) && (knight.index + 2) < 8)) {
            board[knight.row + 1][knight.index + 2] === EMPTY
                && knightMoves.push([knight.row + 1, knight.index + 2])
        }

        // bottom right top move
        if ((0 <= (knight.row + 2) && (knight.row + 2) < 8) && (0 <= (knight.index + 1) && (knight.index + 1) < 8)) {
            board[knight.row + 2][knight.index + 1] === EMPTY
                && knightMoves.push([knight.row + 2, knight.index + 1])
        }

    }
    return knightMoves;
}



export const queenMoves = (queen, board) => {
    let queenMoves = [];

    // queen = queen.selectedPiece;

    // console.log(board[queen.row-2][queen.index])
    if (queen.row !== null) {


        // up vertical moves
        for (let i = 0; i <= queen.row; i++) {
            if (board[queen.row - i][queen.index] !== EMPTY && i !== 0) { break };
            board[queen.row - i][queen.index] === EMPTY
                && queenMoves.push([queen.row - i, queen.index])
        }

        // down vertical moves 
        for (let i = 0; i < board.length - queen.row; i++) {
            if (board[queen.row + i][queen.index] !== EMPTY && i !== 0) { break };
            board[queen.row + i][queen.index] === EMPTY
                && queenMoves.push([queen.row + i, queen.index])
        }

        // right moves
        for (let i = 0; i < board.length - queen.index; i++) {
            if (board[queen.row][queen.index + i] !== EMPTY && i !== 0) { break };
            board[queen.row][queen.index + i] === EMPTY
                && queenMoves.push([queen.row, queen.index + i])
        }

        // left moves
        for (let i = 0; i <= queen.index; i++) {
            if (board[queen.row][queen.index - i] !== EMPTY && i !== 0) { break };
            board[queen.row][queen.index - i] === EMPTY
                && queenMoves.push([queen.row, queen.index - i])
        }

        // up-right diagonal moves
        for (let i = 0; i < board.length; i++) {
            if ((0 <= (queen.row - i) && (queen.row - i) < 8) && (0 <= (queen.index + i) && (queen.index + i) < 8)) {
                if (board[queen.row - i][queen.index + i] !== EMPTY && i !== 0) { break };
                board[queen.row - i][queen.index + i] === EMPTY
                    && queenMoves.push([queen.row - i, queen.index + i])
            }
        }

        // down-right diagonal moves 
        for (let i = 0; i < board.length; i++) {
            if ((0 <= (queen.row + i) && (queen.row + i) < 8) && (0 <= (queen.index + i) && (queen.index + i) < 8)) {
                if (board[queen.row + i][queen.index + i] !== EMPTY && i !== 0) { break };
                board[queen.row + i][queen.index + i] === EMPTY
                    && queenMoves.push([queen.row + i, queen.index + i])
            }
        }

        // up-left diagonal moves
        for (let i = 0; i <= queen.index; i++) {
            if ((0 <= (queen.row - i) && (queen.row - i) < 8) && (0 <= (queen.index - i) && (queen.index - i) < 8)) {
                if (board[queen.row - i][queen.index - i] !== EMPTY && i !== 0) { break };
                board[queen.row - i][queen.index - i] === EMPTY
                    && queenMoves.push([queen.row - i, queen.index - i])
            }
        }

        // down-left diagonal moves
        for (let i = 0; i <= queen.index; i++) {
            if ((0 <= (queen.row + i) && (queen.row + i) < 8) && (0 <= (queen.index - i) && (queen.index - i) < 8)) {
                if (board[queen.row + i][queen.index - i] !== EMPTY && i !== 0) { break };
                board[queen.row + i][queen.index - i] === EMPTY
                    && queenMoves.push([queen.row + i, queen.index - i])
            }
        }
    }
    return queenMoves;
}


export const kingMoves = (king, board) => {
    let kingMoves = [];

    // king = king.selectedPiece;
// 
    // console.log(board[rook.row-2][rook.index])

    if (king.row !== null) {
        // top move
        if ((0 <= (king.row - 1) && (king.row - 1) < 8)) {
            board[king.row - 1][king.index] === EMPTY
                && kingMoves.push([king.row - 1, king.index])
        }

        // right move
        if ((0 <= (king.index + 1) && (king.index + 1) < 8)) {
            board[king.row][king.index + 1] === EMPTY
                && kingMoves.push([king.row, king.index + 1])
        }

        // bottom move
        if ((0 <= (king.row + 1) && (king.row + 1) < 8)) {
            board[king.row + 1][king.index] === EMPTY
                && kingMoves.push([king.row + 1, king.index])
        }

        // left move
        if ((0 <= (king.index - 1) && (king.index - 1) < 8)) {
            board[king.row][king.index - 1] === EMPTY
                && kingMoves.push([king.row, king.index - 1])
        }

        // top right move
        if ((0 <= (king.row - 1) && (king.row - 1) < 8) && (0 <= (king.index + 1) && (king.index + 1) < 8)) {
            board[king.row - 1][king.index + 1] === EMPTY
                && kingMoves.push([king.row - 1, king.index + 1])
        }

        // bottom right move
        if ((0 <= (king.row + 1) && (king.row + 1) < 8) && (0 <= (king.index + 1) && (king.index + 1) < 8)) {
            board[king.row + 1][king.index + 1] === EMPTY
                && kingMoves.push([king.row + 1, king.index + 1])
        }

        // bottom left move
        if ((0 <= (king.row + 1) && (king.row + 1) < 8) && (0 <= (king.index - 1) && (king.index - 1) < 8)) {
            board[king.row + 1][king.index - 1] === EMPTY
                && kingMoves.push([king.row + 1, king.index - 1])
        }

        // top left move
        if ((0 <= (king.row - 1) && (king.row - 1) < 8) && (0 <= (king.index - 1) && (king.index - 1) < 8)) {
            board[king.row - 1][king.index - 1] === EMPTY
                && kingMoves.push([king.row - 1, king.index - 1])
        }

    }
    return kingMoves;
}
