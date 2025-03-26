'use client'

import React, { useState } from "react";
import GameBoard from "./GameBoard";
import QuestionPanel from "./QuestionPanel";
import GameControls from "./GameControls";
import { Game } from "@/domain/game";
import { GameQuestion } from "@/domain/game-question";

interface GuessWhoGameProps {
    game: Game
    isGuessing: boolean
}

const GuessWhoGame = ({ game, isGuessing }: GuessWhoGameProps) => {
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

interface AskedQuestionsProps {
    questions: string[]
}
const AskedQuestions = ({ questions }: AskedQuestionsProps) => {
    return (
        <div className="mt-4 p-2 border rounded">
            <h2 className="text-lg font-semibold">Questions posées :</h2>
            <ul>
                {questions.map((q, index) => (
                    <li key={index} className="text-gray-700">- {q}</li>
                ))}
            </ul>
        </div>
    );
};

export default GuessWhoGame;