import Square from "./Square"
import calculateWinner from "../helper"

function Board({ isNext, currentSquares, handlePlay }) {
  // status
  let status
  const winner = calculateWinner(currentSquares)
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${isNext ? "X" : "O"}`
  }

  function handleClick(index) {
    if (currentSquares[index] || calculateWinner(currentSquares)) return

    const array = currentSquares.slice()

    if (isNext) {
      array[index] = "X"
    } else {
      array[index] = "O"
    }

    handlePlay(array)
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={currentSquares[0]} handleClick={() => handleClick(0)} />
        <Square value={currentSquares[1]} handleClick={() => handleClick(1)} />
        <Square value={currentSquares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={currentSquares[3]} handleClick={() => handleClick(3)} />
        <Square value={currentSquares[4]} handleClick={() => handleClick(4)} />
        <Square value={currentSquares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={currentSquares[6]} handleClick={() => handleClick(6)} />
        <Square value={currentSquares[7]} handleClick={() => handleClick(7)} />
        <Square value={currentSquares[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default Board
