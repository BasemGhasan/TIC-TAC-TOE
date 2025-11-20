"use client"
import { useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  return (
    <div className="animated-gradient">
      <div className="root">
        <h1 className="header"> Tic-Tac-Toe Game</h1>
        <div className="board">
          {cells.map((cell, index) => (
            <Cell key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
