export const initialBoard = [
    ["br", "bn", "bb", "bk", "bq", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
]



// need to disallow king from moving into a position that will put him into check
// need to force player to kill pieces causing check if its the only way to escape checkmate
// need to force king to move when in danger if possible


// need to see if checkmate piece is blockable

// need to do the same thing as checkCheckMate where we check all possible king moves
// but instead we need to do it with all the players pieces and see if there is checkmate then
