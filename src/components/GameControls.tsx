import React from "react";

interface GameControlsProps {
  onReset: () => void;
  onGuess: () => void;
}
const GameControls: React.FC<GameControlsProps> = ({ onReset, onGuess }) => {
  return (
    <div className="flex gap-4 mt-4">
      <button
        className="bg-red-500 text-white p-2 rounded w-full"
        onClick={onReset}
      >
        Réinitialiser
      </button>
      <button
        className="bg-green-500 text-white p-2 rounded w-full"
        onClick={onGuess}
      >
        Deviner
      </button>
    </div>
  );
};

export default GameControls;
