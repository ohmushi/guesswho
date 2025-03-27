import { Game } from "@/domain/game";

export function load_game_by_id(id: Game['id']): Promise<Game> {
    return Promise.resolve({
        id: id,
        currentQuestion: { id: '1-3', question: 'Est-il chauve ?', answer: null, askedAt: null },
        questionsHistory: [
            { id: '1-2', question: 'Est-il jeune ?', answer: 'no', askedAt: new Date() },
            { id: '1-1', question: 'Est-ce un home ?', answer: 'yes', askedAt: new Date() },
        ],
    } satisfies Game)
}

export function save_game(game: Game): Promise<void> {
    return Promise.resolve()
}