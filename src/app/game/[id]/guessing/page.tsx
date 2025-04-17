import GuessingView from "@/components/GuessingView";
import { load_game_by_id } from "../../game.facade";
import { GameQuestion } from "@/domain/game-question";
import { notFound } from "next/navigation";

interface GuessingPageProps {
  params: Promise<{ id: string }>;
}

export default async function GuessingPage({ params }: GuessingPageProps) {
  const { id } = await params;
  const game = await load_game_by_id(id);
  if (!game) return notFound();

  return <GuessingView game={game} />;
}
