"use client";
import { useState } from "react";
import Cell from "./components/cell";
import { IoIosRefresh } from "react-icons/io";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("X");
  const [turn, setTurn] = useState(`It is X to play`);
  const [error, setError] = useState("");
  const [end, setEnd] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false); 

  const resetGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("X");
    setTurn("It is X to play");
    setError("");
    setEnd(false);
    setIsSpinning(true); 
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <div className="animated-gradient">
      <div className="root">
        <h1 className="header"> Tic-Tac-Toe Game</h1>
        <h2 className="play-turn"> {turn} </h2>
        <div className="board">
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
        {error && <h3 className="error-message">{error}</h3>}
        <div className="container" onClick={resetGame}>
          <h2>Clean the board</h2>
          <IoIosRefresh className={`refreshIcon ${isSpinning ? 'spin' : ''}`} />
        </div>
      </div>
    </div>
  );
}
