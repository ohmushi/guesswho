'use client'

import React, { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import QuestionPanel from "./QuestionPanel";
import GameControls from "./GameControls";
import { Game } from "@/domain/game";
import { GameQuestion } from "@/domain/game-question";
import AskedQuestions from "./AskedQuestions";
import { notFound } from "next/navigation";

interface GuessingViewProps {
    game: Game,
}

const GuessingView = ({ game }: GuessingViewProps) => {
    const handleAskQuestion = (question: string) => {
        const newId = 1 + Math.max(...game.questionsHistory.map(q => +(q.id.split('-').pop() ?? '0')))
        game.currentQuestion = {
            id: `${game.id}-${newId}`,
            question: question,
            answer: null,
            askedAt: new Date()
        } satisfies GameQuestion
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-center">Guess Who?</h1>
            <QuestionPanel onAskQuestion={handleAskQuestion} />
            <GameBoard />
            <AskedQuestions
                currentQuestion={game.currentQuestion} 
                questions={game.questionsHistory}
            />
        </div>
    );
};

export default GuessingView;