import GuessingView from "@/components/GuessingView"
import { Game as GameType } from "@/domain/game"

interface GuessingPageProps {
    params: Promise<{ id: string }>
}

export default async function GuessingPage({ params }: GuessingPageProps) {
    const game = await load_game_by_id((await params).id)
    return (
        <GuessingView game={game} />
    )
}

function load_game_by_id(id: string): Promise<GameType> {
    return Promise.resolve({
        questions: []
    } satisfies GameType)
}
