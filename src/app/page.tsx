"use client";
import { useState } from "react";
import Cell from "./components/cell";
import { IoIosRefresh } from "react-icons/io";

// Main game component
export default function Home() {
  // Game state
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]); // Board cells
  const [go, setGo] = useState("X"); // Current player
  const [turn, setTurn] = useState(`It is X to play`); // Turn message
  const [error, setError] = useState(""); // Error message
  const [end, setEnd] = useState(false); // Game ended flag
  const [isSpinning, setIsSpinning] = useState(false); // Icon spin state

  // Reset game function
  const resetGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("X");
    setTurn("It is X to play");
    setError("");
    setEnd(false);
    setIsSpinning(true); // Start spin
    setTimeout(() => setIsSpinning(false), 1000); // Stop after 1s
  };

  return (
    <div className="animated-gradient">
      <div className="root">
        <h1 className="header"> Tic-Tac-Toe Game</h1>
        <h2 className="play-turn"> {turn} </h2> {/* Display turn or result */}
        <div className="board">
          {/* Render 9 cells */}
          {cells.map((cell, index) => (
            <Cell
              id={index}
              key={index}
              cells={cells}
              setCells={setCells}
              go={go}
              setGo={setGo}
              setTurn={setTurn}
              setError={setError}
              end={end}
              setEnd={setEnd}
            />
          ))}
        </div>
        {error && <h3 className="error-message">{error}</h3>}{" "}
        {/* Show error if any */}
        <div className="container" onClick={resetGame}>
          {" "}
          {/* Reset button */}
          <h2>Clean the board</h2>
          <IoIosRefresh className={`refreshIcon ${isSpinning ? "spin" : ""}`} />
        </div>
      </div>
    </div>
  );
}
