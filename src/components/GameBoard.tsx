import React, { useEffect, useMemo, useState } from "react";
import CharacterCard from "./CharacterCard";
import { characters } from "@/data/characters";
import { Character } from "@/domain/character";

const GameBoard = () => {
  useEffect(() => setShown(characters), [characters])
  const [shown, setShown] = useState<Character[]>(characters);
  const guessed = useMemo<Character | null>(() => getGuessedCharacter(shown), [shown])

  function getGuessedCharacter(shown: Character[]): Character | null {
    if (shown.length === 1) return shown[0]
    else return null
  }

  const handleSetCardHidden = (c: Character) => {
    setShown(shown.filter(s => s.id !== c.id))
  };
  const handleSetCardShown = (c: Character) => {
    if (shown.includes(c)) return
    setShown([...shown, c])
  };

  useEffect(() => {
    if (guessed) alert('guessed ' + guessed.name)
  }, [guessed])

  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onHideCard={() => handleSetCardHidden(character)}
          onShowCard={() => handleSetCardShown(character)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
