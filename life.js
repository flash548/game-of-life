

class Grid {
    constructor(board, rows, cols) {
        this.board = board;
        this.rows = rows;
        this.cols = cols;
    }
    
    getLoc(row, col) {
        return this.board[row][col];
    }
    
    getNeighbors(row, col) {
        return [
            this.board[row-1]?.[col-1],
            this.board[row-1]?.[col],
            this.board[row-1]?.[col+1],
            this.board[row]?.[col+1],
            this.board[row+1]?.[col+1],
            this.board[row+1]?.[col],
            this.board[row+1]?.[col-1],
            this.board[row]?.[col-1]
        ].map(e => e === undefined ? 0 : e);
    }
    
    tick() {
        let newBoard = [new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8)];
        for (let i=0;i<this.board.length;i++) {
            for(let j=0;j<this.board[i].length;j++) {
                let sum = this.getNeighbors(i, j).reduce((a, acc) => a+acc);
                if (sum < 2) {
                    newBoard[i][j] = 0;
                } else if (sum > 3) {
                    newBoard[i][j] = 0;
                } else if (sum == 3) {
                    newBoard[i][j] = 1;
                } else { newBoard[i][j] = this.board[i][j]; }
            }
        }
        this.board = newBoard.map(i => i.map(j=>j));
        console.log(this.board.map(i => i.join(",")).join("\n"));
        console.log("=============");
    }
}

let m=[
    [0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [1,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];
let g = new Grid(m, m.length, m[0].length);
g.tick();
g.tick();
g.tick();

/*
0,0,0,0,0,0,0,0
0,1,0,0,0,0,0,0
0,1,0,1,0,0,0,0
0,1,0,1,0,0,0,1
0,0,0,0,0,0,1,1
0,0,0,0,0,0,0,0
*/



