import { Answer, GameQuestion } from "./game-question";

export interface Game {
    id: string
    currentQuestion: GameQuestion | null
    questionsHistory: GameQuestion[]
}

export function answerCurrentQuestionInGame(answer: Answer, game: Game): Game {
    // const newId = 1 + Math.max(...game.questionsHistory.map(q => +(q.id.split('-').pop() ?? '0')))
    if (!game.currentQuestion) return game

    const answered: GameQuestion = {
        ...game.currentQuestion,
        answer: answer,
        askedAt: new Date()
    }
    return {
        ...game,
        currentQuestion: null,
        questionsHistory: [answered, ...game.questionsHistory]
    }
}

export function gameWithNewQuestion(game: Game, question: GameQuestion['question']): Game {
    const newId = 1 + Math.max(...game.questionsHistory.map(q => +(q.id.split('-').pop() ?? '0')))
    const newQuestion = {
        id: `${game.id}-${newId}`,
        question: question,
        answer: null,
        askedAt: new Date()
    } satisfies GameQuestion
    return {
        ...game,
        currentQuestion: newQuestion,
    } satisfies Game;
}