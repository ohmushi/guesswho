import GuessWhoGame from "@/components/GuessWhoGame"
import { Game as GameType } from "@/domain/game"

interface GameProps {
    params: Promise<{ id: string }>
}

export default async function Game({ params }: GameProps) {
    const game = await load_game_by_id((await params).id)
    return (
        <GuessWhoGame game={game} isGuessing={true} />
    )
}

function load_game_by_id(id: string): Promise<GameType> {
    return Promise.resolve({
        questions: []
    } satisfies GameType)
}
