"use client";
import { useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("X");
  return (
    <div className="animated-gradient">
      <div className="root">
        <h1 className="header"> Tic-Tac-Toe Game</h1>
        <div className="board">
          {cells.map((cell, index) => (
            <Cell
              id={index}
              key={index}
              cells={cells}
              setCells={setCells}
              go={go}
              setGo={setGo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
