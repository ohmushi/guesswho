'use client'

import { load_game_by_id, save_game } from "@/app/game/game.facade";
import { answerCurrentQuestionInGame, Game, gameWithNewQuestion } from "@/domain/game";
import { Answer, GameQuestion } from "@/domain/game-question";
import { createContext, useContext, useState, ReactNode, Context, FC, useEffect, useCallback } from "react";

interface GameContextType {
    game: Game
    answerQuestion: (answer: Answer) => Promise<void>
    loadGameById: (id: Game['id']) => Promise<void>
    askQuestion: (question: GameQuestion['question']) => Promise<void>
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: FC<{ id: Game['id'], children: ReactNode }> = ({ id, children }) => {
    const [game, setGame] = useState<Game>({
        id: "",
        currentQuestion: null,
        questionsHistory: []
    } satisfies Game)

    const answerQuestion = async (answer: Answer) => {
        //await save_game(game)
        setGame(answerCurrentQuestionInGame(answer, game))
    }

    const askQuestion = async (question: GameQuestion['question']) => {
        setGame(gameWithNewQuestion(game, question))
    }

    const loadGameById = useCallback(async (id: Game['id']) => {
        setGame(await load_game_by_id(id))
    }, [id])

    useEffect(() => {
        loadGameById(id);
    }, [loadGameById]);

    return (
        <GameContext.Provider value={{ game, answerQuestion, loadGameById, askQuestion }}>
            {children}
        </GameContext.Provider>
    )
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGame must be used within a GameProvider");
    }
    return context;
};
