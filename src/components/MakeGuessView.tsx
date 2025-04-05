'use client'

import { Answer, GameQuestion } from "@/domain/game-question";
import CharacterCard from "./CharacterCard";
import { Character } from "@/domain/character";
import QuestionPanel from "./QuestionPanel";
import AskedQuestions from "./AskedQuestions";
import { answerCurrentQuestionInGame as gameWithAnswerForCurrentQuestion, Game } from "@/domain/game";
import { useMemo, useState } from "react";
import { useGame } from "@/contexts/game.context";
import { load_game_by_id } from "@/app/game/game.facade";

interface MakeGuessViewProps {
  character: Character
}

const MakeGuessView = ({ character }: MakeGuessViewProps) => {

  const { game, answerQuestion } = useGame()
  const isAskingQuestion = useMemo(() => game.currentQuestion !== null, [game]);

  return (
    <>
      <h2 className="text-lg font-semibold text-center">Faire deviner</h2>
      <CharacterCard character={character} />
      <p className="text-center text-2xl font-bold mt-2">{game.currentQuestion?.question ?? '...'}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button
          disabled={!isAskingQuestion}
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => answerQuestion("yes")}>
          Oui
        </button>
        <button
          disabled={!isAskingQuestion}
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => answerQuestion("no")}>
          Non
        </button>
      </div>
    </>
  );
};

export default MakeGuessView