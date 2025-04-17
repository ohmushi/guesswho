import { Character } from "@/domain/character";
import React, { useState } from "react";

interface CharacterCardProps {
  character: Character;
  onHideCard: () => void;
  onShowCard: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onHideCard,
  onShowCard,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className="relative w-32 h-44 mx-auto cursor-pointer perspective-1000"
      onClick={() => {
        setIsRevealed(!isRevealed);
        if (isRevealed) onShowCard()
        else onHideCard()
      }}
    >
      <div
        className={`w-full h-full transition-transform duration-1000 transform-style-preserve-3d ${isRevealed ? "rotate-y-180" : ""}`}
      >
        <HiddenFace name={character.name} />
        <ShownFace character={character} />
      </div>
    </div>
  );
};

const HiddenFace = ({ name }: { name: string }) => {
  const color = "bg-gradient-to-br from-stone-500 to-stone-700"
  return (
    <div className={"absolute w-full h-full flex items-center justify-center text-white font-bold rounded-lg backface-hidden card-back " + color}>
      {name}
    </div>
  )
}

const ShownFace = ({ character }: { character: Character }) => {
  return (
    <div className="absolute w-full h-full rounded-lg shadow-lg bg-white backface-hidden card-front overflow-hidden">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto rounded-t-lg"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 from-0% via-black/5 via-80% p-2 pt-8">
        <p className="text-white text-sm font-bold text-start">
          {character.name}
        </p>
      </div>
    </div>
  )
}

export default CharacterCard;
