import React, { useState } from "react"
import Board from "./components/Board"

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentIndex, setCurrentIndex] = useState(0)
  const isNext = currentIndex % 2 === 0
  const currentSquares = history[currentIndex]

  function handlePlay(someArray) {
    const nextHistory = [...history.slice(0, currentIndex + 1), someArray]
    setHistory(nextHistory)
    setCurrentIndex(nextHistory.length - 1)
  }

  function jumpTo(nextIndex) {
    setCurrentIndex(nextIndex)
  }

  const moves = history.map((_, index) => {
    let description
    if (index > 0) {
      description = `Go to move ${index}`
    } else {
      description = "Go to game start"
    }
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board
          isNext={isNext}
          currentSquares={currentSquares}
          handlePlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
