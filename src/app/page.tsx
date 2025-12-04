"use client";
import { useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("X");
  const [turn, setTurn]  = useState(`It is X to play`);
  const [error, setError] = useState("");

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
            />
          ))}
        </div>
        {error && <h3 className="error-message">{error}</h3>}
      </div>
    </div>
  );
}
