'use client'

import React, { useEffect, useMemo, useState } from "react";
import GameBoard from "./GameBoard";
import QuestionPanel from "./QuestionPanel";
import GameControls from "./GameControls";
import { Game } from "@/domain/game";
import { GameQuestion } from "@/domain/game-question";
import AskedQuestions from "./AskedQuestions";
import { notFound } from "next/navigation";
import { useGame } from "@/contexts/game.context";

interface GuessingViewProps {
}

const GuessingView = ({ }: GuessingViewProps) => {
    const { game, answerQuestion, askQuestion } = useGame();
    const isAskingQuestion: boolean = useMemo(() => game.currentQuestion !== null, [game])

    const handleAskQuestion = (question: GameQuestion['question']) => {
        askQuestion(question)
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-center">Guess Who?</h1>
            <QuestionPanel active={!isAskingQuestion} onAskQuestion={handleAskQuestion} />
            <GameBoard />
            <AskedQuestions
                currentQuestion={game.currentQuestion}
                questions={game.questionsHistory}
            />
        </div>
    );
};

export default GuessingView;