import MakeGuessView from "@/components/MakeGuessView"
import { characters } from "@/data/characters"
import { load_game_by_id } from "../game.facade"
import { notFound } from "next/navigation"
import { GameProvider } from "@/contexts/game.context"
import GuessingView from "@/components/GuessingView"

interface MakeGuessPageProps {
  params: Promise<{ id: string }>
}
const MakeGuessPage = async ({ params }: MakeGuessPageProps) => {
  const character = characters[0]
  const { id } = await params
  return (
    <GameProvider id={id}>
      <GuessingView />
      <MakeGuessView character={character} />
    </GameProvider>

  )
}

export default MakeGuessPage