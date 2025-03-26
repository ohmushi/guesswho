'use client'

import React, { useState } from "react";
import GameBoard from "./GameBoard";
import QuestionPanel from "./QuestionPanel";
import GameControls from "./GameControls";
import { Game } from "@/domain/game";
import { GameQuestion } from "@/domain/game-question";
import AskedQuestions from "./AskedQuestions";

interface GuessingViewProps {
    game: Game
}

const GuessingView = ({ game }: GuessingViewProps) => {
    const [questions, setQuestions] = useState<GameQuestion[]>(game.questions);

    const handleAskQuestion = (question: string) => {
        setQuestions([...questions, {
            question: question,
            answer: null
        } satisfies GameQuestion]);
    };

    const handleReset = () => {
        setQuestions([]);
    };

    const handleGuess = () => {
        alert("Devinez quel personnage a été choisi !");
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-center">Guess Who?</h1>
            <QuestionPanel onAskQuestion={handleAskQuestion} />
            <GameBoard />
            <AskedQuestions questions={questions} />
        </div>
    );
};

export default GuessingView;