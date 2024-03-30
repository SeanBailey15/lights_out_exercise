import React, {useState} from "react";
import Cell from "./Cell";
import "./Board.css";

const Board = ({rows=5, cols=5, chanceLit=0.25}) => {
    const [board, setBoard] = useState(createBoard)

    function createBoard() {
        let board = [];
        for(let y = 0; y < rows; y++) {
            let row = []
            for(let x = 0; x < cols; x++){
                row.push(Math.random() < chanceLit)
            }
            board.push(row)
        }
        return board        
    }

    function win() {
        return board.every(row => row.every(cell => !cell))
    }

    function toggleCells(coord) {
        setBoard(board => {
            const [y,x] = coord.split("-").map(Number);

            const toggleCell = (y, x, newBoard) => {
                console.log()
                if (x >=0 && x < cols && y >= 0 && y < rows) {
                    newBoard[y][x] = !newBoard[y][x];
                }
            }
            const newBoard = board.map(row => [...row]);
    
            toggleCell(y, x, newBoard)
            toggleCell(y, x - 1, newBoard)
            toggleCell(y, x + 1, newBoard)
            toggleCell(y - 1, x, newBoard)
            toggleCell(y + 1, x, newBoard)
    
            return newBoard
        })
    }

    if(win()) {
        return <div className="Board-message">
            <h1>💡You Win!💡</h1>
            <h2>Refresh The Page To Start A New Game</h2>
        </div>
    }

    let gameBoard = [];

    for(let y = 0; y < rows; y++){
        let row = [];
        for(let x = 0; x < cols; x++) {
            let coord = `${y}-${x}`;
            row.push(
                <Cell
                    key={coord}
                    isLit={board[y][x]}
                    toggleCellsAroundMe={evt => toggleCells(coord)}
                />
            )
        }
        gameBoard.push(row)
    }

    return (
        <div className="Board">
            {gameBoard}
        </div>
    )
}

export default Board;