import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  turn: string;
  setTurn:  Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
};

export default function Cell({ id, cells, setCells, go, setGo, turn, setTurn, setError,}: CellProps) {

  const handleClick = () => {
    const taken = !!cells[id];
    if (turn.slice(0, 6) === "Player"){
      return
    }
    if (taken) {
      setError("This block is already taken. Please click somewhere else.");
      return;
    }
    
    const nextGo = go === "X" ? "O" : "X";
    const newCells = [...cells];
    newCells[id] = go;
    setCells(newCells);
    setGo(nextGo);
    setTurn(`It is ${nextGo} to play`);
    setError("");
    winningChecker(newCells);
  };

  const winningChecker = (newCells: string[]) => {
    const winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

    for (let i = 0; i < winningCombinations.length; i++){
      if (!!newCells[winningCombinations[i][0]] && newCells[winningCombinations[i][0]] === newCells[winningCombinations[i][1]] && newCells[winningCombinations[i][0]] === newCells[winningCombinations[i][2]]){
        setTurn(`Player ${newCells[winningCombinations[i][0]]} Won!!`);
        return;
      }
    }
    if(newCells.every(newCell => newCell !== "")){
      setTurn(`It's a Draw!!`);
    }
  }

  return (
    <div className="cell" onClick={handleClick}>
      {cells[id]}
    </div>
  );
}
