import React from "react";
import CharacterCard from "./CharacterCard";
import { characters } from "@/data/characters";

const GameBoard = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default GameBoard;
