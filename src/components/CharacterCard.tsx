import { Character } from "@/domain/character";
import React from "react";

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <div className="border p-2 text-center cursor-pointer hover:bg-gray-200 max-w-3xs mx-auto">
            <img src={character.image} alt={character.name} className="w-full h-auto" />
            <p className="mt-2 font-bold">{character.name}</p>
        </div>
    );
};

export default CharacterCard;