import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  setTurn:  Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
};

export default function Cell({ id, cells, setCells, go, setGo, setTurn, setError }: CellProps) {

  const handleClick = () => {
    const taken = !!cells[id];
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
  };

  return (
    <div className="cell" onClick={handleClick}>
      {cells[id]}
    </div>
  );
}
