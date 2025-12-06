import { Dispatch, SetStateAction } from "react";

// Props for Cell component
type CellProps = {
  id: number;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  setTurn: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  end: boolean;
  setEnd: Dispatch<SetStateAction<boolean>>;
};

export default function Cell({
  id,
  cells,
  setCells,
  go,
  setGo,
  setTurn,
  setError,
  end,
  setEnd,
}: CellProps) {
  // Handle cell click
  const handleClick = () => {
    if (!end) {
      const taken = !!cells[id];
      if (taken) {
        setError("This block is already taken. Please click somewhere else.");
        return;
      }

      const newCells = [...cells];
      handleCellChange(newCells);
      winningChecker(newCells);
    }
  };

  // Update cell and switch player
  const handleCellChange = (newCells: string[]) => {
    const nextGo = go === "X" ? "O" : "X";
    newCells[id] = go;
    setCells(newCells);
    setGo(nextGo);
    setTurn(`It is ${nextGo} to play`);
    setError("");
  };

  // Check for win or draw
  const winningChecker = (newCells: string[]) => {
    const winningCombos = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6],
    ];

    winningCombos.forEach((combo) => {
      if (
        !!newCells[combo[0]] &&
        newCells[combo[0]] === newCells[combo[1]] &&
        newCells[combo[0]] === newCells[combo[2]]
      ) {
        setTurn(`Player ${newCells[combo[0]]} Won!!`);
        setEnd(true);
        return;
      }
    });

    if (newCells.every((newCell) => newCell !== "")) {
      setTurn(`It's a Draw!!`);
      setEnd(true);
    }
  };

  return (
    <div className="cell" onClick={handleClick}>
      <div className={cells[id]}>{cells[id]}</div>
    </div>
  );
}
