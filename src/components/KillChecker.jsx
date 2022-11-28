import { BLACK, WHITE, EMPTY } from "./Constants"


export const pawnKills = (pawn, board) => {
    // check if pawn has moved already
    let pawnKills = [];
    // pawn = pawn.selectedPiece;

    let opponent = pawn.color === WHITE ? 'b' : 'w';

    if (pawn.color === BLACK) {
        // down right kills
        if ((0 <= (pawn.row + 1) && (pawn.row + 1) < 8) && (0 <= (pawn.index + 1) && (pawn.index + 1) < 8)) {
            if (board[pawn.row + 1][pawn.index + 1].charAt(0) === opponent) {
                pawnKills.push([pawn.row + 1, pawn.index + 1])
            }
        }

        // down left kills
        if ((0 <= (pawn.row + 1) && (pawn.row + 1) < 8) && (0 <= (pawn.index - 1) && (pawn.index - 1) < 8)) {
            if (board[pawn.row + 1][pawn.index - 1].charAt(0) === opponent) {
                pawnKills.push([pawn.row + 1, pawn.index - 1])
            }
        }

    } else if (pawn.color === WHITE) {

        // up right kills
        if ((0 <= (pawn.row - 1) && (pawn.row - 1) < 8) && (0 <= (pawn.index + 1) && (pawn.index + 1) < 8)) {
            if (board[pawn.row - 1][pawn.index + 1].charAt(0) === opponent) {
                pawnKills.push([pawn.row - 1, pawn.index + 1])
            }
        }

        // up left kills
        if ((0 <= (pawn.row - 1) && (pawn.row - 1) < 8) && (0 <= (pawn.index - 1) && (pawn.index - 1) < 8)) {
            if (board[pawn.row - 1][pawn.index - 1].charAt(0) === opponent) {
                pawnKills.push([pawn.row - 1, pawn.index - 1])
            }
        }
    }
    return pawnKills;
}


export const rookKills = (rook, board) => {
    // check if pawn has moved already
    let rookKills = [];

    // rook = rook.selectedPiece;

    let opponent = rook.color === WHITE ? 'b' : 'w';
    let player = rook.color === WHITE ? 'w' : 'b';

    // console.log(board[rook.row-2][rook.index])
    if (rook.row !== null) {

        // up vertical Kills
        for (let i = 0; i <= rook.row; i++) {
            if (board[rook.row - i][rook.index].charAt(0) === player && i !== 0) { break };
            if (board[rook.row - i][rook.index].charAt(0) === opponent) {
                rookKills.push([rook.row - i, rook.index])
                break;
            }
        }

        // down vertical Kills 
        for (let i = 0; i < board.length - rook.row; i++) {
            if (board[rook.row + i][rook.index].charAt(0) === player && i !== 0) { break };
            if (board[rook.row + i][rook.index].charAt(0) === opponent) {
                rookKills.push([rook.row + i, rook.index])
                break;
            }
        }

        // right Kills
        for (let i = 0; i < board.length - rook.index; i++) {
            if (board[rook.row][rook.index + i].charAt(0) === player && i !== 0) { break };
            if (board[rook.row][rook.index + i].charAt(0) === opponent) {
                rookKills.push([rook.row, rook.index + i])
                break;
            }
        }

        // left Kills
        for (let i = 0; i <= rook.index; i++) {
            if (board[rook.row][rook.index - i].charAt(0) === player !== EMPTY && i !== 0) { break };
            if (board[rook.row][rook.index - i].charAt(0) === opponent) {
                rookKills.push([rook.row, rook.index - i])
                break;
            }
        }
    }
    return rookKills;
}





export const bishopKills = (bishop, board) => {
    // check if pawn has moved already
    let bishopKills = [];

    // bishop = bishop.selectedPiece;

    let opponent = bishop.color === WHITE ? 'b' : 'w';
    let player = bishop.color === WHITE ? 'w' : 'b';

    // console.log(board[rook.row-2][rook.index])
    if (bishop.row !== null) {

        // up-right diagonal moves
        for (let i = 0; i < board.length; i++) {
            if ((0 <= (bishop.row - i) && (bishop.row - i) < 8) && (0 <= (bishop.index + i) && (bishop.index + i) < 8)) {
                if (board[bishop.row - i][bishop.index + i].charAt(0) === player && i !== 0) { break };
                if (board[bishop.row - i][bishop.index + i].charAt(0) === opponent) {
                    bishopKills.push([bishop.row - i, bishop.index + i])
                    break;
                }
            }
        }

        // down-right diagonal moves 
        for (let i = 0; i < board.length; i++) {
            if ((0 <= (bishop.row + i) && (bishop.row + i) < 8) && (0 <= (bishop.index + i) && (bishop.index + i) < 8)) {
                if (board[bishop.row + i][bishop.index + i].charAt(0) === player && i !== 0) { break };
                if (board[bishop.row + i][bishop.index + i].charAt(0) === opponent) {
                    bishopKills.push([bishop.row + i, bishop.index + i])
                    break;
                }
            }
        }

        // up-left diagonal moves
        for (let i = 0; i <= bishop.index; i++) {
            if ((0 <= (bishop.row - i) && (bishop.row - i) < 8) && (0 <= (bishop.index - i) && (bishop.index - i) < 8)) {
                if (board[bishop.row - i][bishop.index - i].charAt(0) === player && i !== 0) { break };
                if (board[bishop.row - i][bishop.index - i].charAt(0) === opponent) {
                    bishopKills.push([bishop.row - i, bishop.index - i])
                    break;
                }
            }
        }

        // down-left diagonal moves 
        for (let i = 0; i <= bishop.index; i++) {
            if ((0 <= (bishop.row + i) && (bishop.row + i) < 8) && (0 <= (bishop.index - i) && (bishop.index - i) < 8)) {
                if (board[bishop.row + i][bishop.index - i].charAt(0) === player && i !== 0) { break };
                if (board[bishop.row + i][bishop.index - i].charAt(0) === opponent) {
                    bishopKills.push([bishop.row + i, bishop.index - i])
                    break;
                }
            }
        }
    }
    return bishopKills;
}


export const knightKills = (knight, board) => {
    let knightKills = [];

    let opponent = knight.color === WHITE ? 'b' : 'w';

    // console.log(board[rook.row-2][rook.index])

    if (knight.row !== null) {

        // Left side Kills
        // top left top move
        if ((0 <= (knight.row - 2) && (knight.row - 2) < 8) && (0 <= (knight.index - 1) && (knight.index - 1) < 8)) {
            board[knight.row - 2][knight.index - 1].charAt(0) === opponent
                && knightKills.push([knight.row - 2, knight.index - 1])
        }

        // top left bottom move
        if ((0 <= (knight.row - 1) && (knight.row - 1) < 8) && (0 <= (knight.index - 2) && (knight.index - 2) < 8)) {
            board[knight.row - 1][knight.index - 2].charAt(0) === opponent
                && knightKills.push([knight.row - 1, knight.index - 2])
        }

        // bottom left top move
        if ((0 <= (knight.row + 1) && (knight.row + 1) < 8) && (0 <= (knight.index - 2) && (knight.index - 2) < 8)) {
            board[knight.row + 1][knight.index - 2].charAt(0) === opponent
                && knightKills.push([knight.row + 1, knight.index - 2])
        }

        // bottom left bottom move
        if ((0 <= (knight.row + 2) && (knight.row + 2) < 8) && (0 <= (knight.index - 1) && (knight.index - 1) < 8)) {
            board[knight.row + 2][knight.index - 1].charAt(0) === opponent
                && knightKills.push([knight.row + 2, knight.index - 1])
        }

        // Right side Kills
        // top right top move
        if ((0 <= (knight.row - 2) && (knight.row - 2) < 8) && (0 <= (knight.index + 1) && (knight.index + 1) < 8)) {
            board[knight.row - 2][knight.index + 1].charAt(0) === opponent
                && knightKills.push([knight.row - 2, knight.index + 1])
        }

        // top right bottom move
        if ((0 <= (knight.row - 1) && (knight.row - 1) < 8) && (0 <= (knight.index + 2) && (knight.index + 2) < 8)) {
            board[knight.row - 1][knight.index + 2].charAt(0) === opponent
                && knightKills.push([knight.row - 1, knight.index + 2])
        }

        // bottom right top move
        if ((0 <= (knight.row + 1) && (knight.row + 1) < 8) && (0 <= (knight.index + 2) && (knight.index + 2) < 8)) {
            board[knight.row + 1][knight.index + 2].charAt(0) === opponent
                && knightKills.push([knight.row + 1, knight.index + 2])
        }

        // bottom right top move
        if ((0 <= (knight.row + 2) && (knight.row + 2) < 8) && (0 <= (knight.index + 1) && (knight.index + 1) < 8)) {
            board[knight.row + 2][knight.index + 1].charAt(0) === opponent
                && knightKills.push([knight.row + 2, knight.index + 1])
        }

    }
    return knightKills;
}



export const queenKills = (queen, board) => {
    let queenKills = [];

    // queen = queen.selectedPiece;
    let opponent = queen.color === WHITE ? 'b' : 'w';
    let player = queen.color === WHITE ? 'w' : 'b';

    // console.log(board[queen.row-2][queen.index])
    if (queen.row !== null) {


        // up vertical Kills
        for (let i = 0; i <= queen.row; i++) {
            if (board[queen.row - i][queen.index].charAt(0) === player && i !== 0) { break };
            if (board[queen.row - i][queen.index].charAt(0) === opponent) {
                queenKills.push([queen.row - i, queen.index])
                break;
            }
        }

        // down vertical Kills 
        for (let i = 0; i < board.length - queen.row; i++) {
            if (board[queen.row + i][queen.index].charAt(0) === player && i !== 0) { break };
            if (board[queen.row + i][queen.index].charAt(0) === opponent) {
                queenKills.push([queen.row + i, queen.index])
                break;
            }
        }

        // right Kills
        for (let i = 0; i < board.length - queen.index; i++) {
            if (board[queen.row][queen.index + i].charAt(0) === player && i !== 0) { break };
            if (board[queen.row][queen.index + i].charAt(0) === opponent) {
                queenKills.push([queen.row, queen.index + i])
                break;
            }
        }

        // left Kills
        for (let i = 0; i <= queen.index; i++) {
            if (board[queen.row][queen.index - i].charAt(0) === player && i !== 0) { break };
            if (board[queen.row][queen.index - i].charAt(0) === opponent) {
                queenKills.push([queen.row, queen.index - i])
                break;
            }
        }

        // up-right diagonal Kills
        for (let i = 0; i < board.length; i++) {
            if ((0 <= (queen.row - i) && (queen.row - i) < 8) && (0 <= (queen.index + i) && (queen.index + i) < 8)) {
                if (board[queen.row - i][queen.index + i].charAt(0) === player && i !== 0) { break };
                if (board[queen.row - i][queen.index + i].charAt(0) === opponent) {
                    queenKills.push([queen.row - i, queen.index + i])
                    break;
                }
            }
        }

        // down-right diagonal Kills 
        for (let i = 0; i < board.length; i++) {
            if ((0 <= (queen.row + i) && (queen.row + i) < 8) && (0 <= (queen.index + i) && (queen.index + i) < 8)) {
                if (board[queen.row + i][queen.index + i].charAt(0) === player && i !== 0) { break };
                if (board[queen.row + i][queen.index + i].charAt(0) === opponent) {
                    queenKills.push([queen.row + i, queen.index + i])
                    break;
                }
            }
        }

        // up-left diagonal Kills
        for (let i = 0; i <= queen.index; i++) {
            if ((0 <= (queen.row - i) && (queen.row - i) < 8) && (0 <= (queen.index - i) && (queen.index - i) < 8)) {
                if (board[queen.row - i][queen.index - i].charAt(0) === player && i !== 0) { break };
                if (board[queen.row - i][queen.index - i].charAt(0) === opponent) {
                    queenKills.push([queen.row - i, queen.index - i])
                    break;
                }
            }
        }

        // down-left diagonal Kills
        for (let i = 0; i <= queen.index; i++) {
            if ((0 <= (queen.row + i) && (queen.row + i) < 8) && (0 <= (queen.index - i) && (queen.index - i) < 8)) {
                if (board[queen.row + i][queen.index - i].charAt(0) === player && i !== 0) { break };
                if (board[queen.row + i][queen.index - i].charAt(0) === opponent) {
                    queenKills.push([queen.row + i, queen.index - i])
                    break;
                }
            }
        }
    }
    return queenKills;
}


export const kingKills = (king, board) => {
    let kingKills = [];

    // king = king.selectedPiece;
    let opponent = king.color === WHITE ? 'b' : 'w';

    // console.log(board[rook.row-2][rook.index])

    if (king.row !== null) {
        // top move
        if ((0 <= (king.row - 1) && (king.row - 1) < 8)) {
            board[king.row - 1][king.index].charAt(0) === opponent
                && kingKills.push([king.row - 1, king.index])
        }

        // right move
        if ((0 <= (king.index + 1) && (king.index + 1) < 8)) {
            board[king.row][king.index + 1].charAt(0) === opponent
                && kingKills.push([king.row, king.index + 1])
        }

        // bottom move
        if ((0 <= (king.row + 1) && (king.row + 1) < 8)) {
            board[king.row + 1][king.index].charAt(0) === opponent
                && kingKills.push([king.row + 1, king.index])
        }

        // left move
        if ((0 <= (king.index - 1) && (king.index - 1) < 8)) {
            board[king.row][king.index - 1].charAt(0) === opponent
                && kingKills.push([king.row, king.index - 1])
        }

        // top right move
        if ((0 <= (king.row - 1) && (king.row - 1) < 8) && (0 <= (king.index + 1) && (king.index + 1) < 8)) {
            board[king.row - 1][king.index + 1].charAt(0) === opponent
                && kingKills.push([king.row - 1, king.index + 1])
        }

        // bottom right move
        if ((0 <= (king.row + 1) && (king.row + 1) < 8) && (0 <= (king.index + 1) && (king.index + 1) < 8)) {
            board[king.row + 1][king.index + 1].charAt(0) === opponent
                && kingKills.push([king.row + 1, king.index + 1])
        }

        // bottom left move
        if ((0 <= (king.row + 1) && (king.row + 1) < 8) && (0 <= (king.index - 1) && (king.index - 1) < 8)) {
            board[king.row + 1][king.index - 1].charAt(0) === opponent
                && kingKills.push([king.row + 1, king.index - 1])
        }

        // top left move
        if ((0 <= (king.row - 1) && (king.row - 1) < 8) && (0 <= (king.index - 1) && (king.index - 1) < 8)) {
            board[king.row - 1][king.index - 1].charAt(0) === opponent
                && kingKills.push([king.row - 1, king.index - 1])
        }

    }
    return kingKills;
}
