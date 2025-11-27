import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
};

export default function Cell({ id, cells, setCells, go, setGo }: CellProps) {
  const handleClick = () => {
    const taken = !!cells[id];
    console.log(taken);
    const newCells = [...cells];
    newCells[id] = go;
    setCells(newCells);
    setGo(go === "X" ? "O" : "X");
  };

  return (
    <div className="cell" onClick={handleClick}>
      {cells[id]}
    </div>
  );
}
