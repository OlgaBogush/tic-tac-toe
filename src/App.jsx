import { useState } from "react"
import Square from "./Square"
import calculateWinner from "./helper"

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNext, setIsNext] = useState(true)

  // status
  let status
  const winner = calculateWinner(squares)
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${isNext ? "X" : "O"}`
  }

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return

    const array = squares.slice()

    if (isNext) {
      array[index] = "X"
    } else {
      array[index] = "O"
    }
    setSquares(array)
    setIsNext(!isNext)
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default Board
