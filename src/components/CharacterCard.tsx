import { Character } from "@/domain/character";
import React, { useState } from "react";

interface CharacterCardProps {
    character: Character;
}


const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div
            className="relative w-32 h-50 mx-auto cursor-pointer perspective-1000"
            onClick={() => setIsRevealed(!isRevealed)}
        >
            <div
                className={`w-full h-full transition-transform duration-200 transform-style-preserve-3d ${isRevealed ? "rotate-y-180" : ""
                    }`}
            >
                <ShownFace character={character} />
                <HidenFace character={character} />
            </div>
        </div>
    );
};

const ShownFace = ({ character }: { character: Character }) => {
    return (
        < div className="absolute w-full h-full rounded-lg shadow-lg bg-white backface-hidden card-front overflow-hidden" >
            < img src={character.image} alt={character.name} className="w-full h-full object-cover rounded-lg" />

            < div className="absolute bottom-0 w-full bg-gradient-to-t from-black/40 via-60% via-black/10 p-1" >
                <p className="text-white text-sm font-bold pt-6">{character.name}</p>
            </div >
        </div >
    )
}

const HidenFace = ({ character }: { character: Character }) => {
    const bg_color = 'bg-gradient-to-tr from-stone-700 to-stone-400'
    return (
        <div className={"absolute w-full h-full flex items-center justify-center text-white font-bold rounded-lg backface-hidden card-back " + bg_color}>
            {character.name}
        </div>
    )
}

export default CharacterCard;