import { GameQuestion } from "@/domain/game-question";
import CharacterCard from "./CharacterCard";
import { Character } from "@/domain/character";
import QuestionPanel from "./QuestionPanel";
import AskedQuestions from "./AskedQuestions";

interface MakeGuessViewProps {
  character: Character
  currentQuestion: GameQuestion | null
  questions: GameQuestion[]
  onAnswer: (answer: 'yes' | 'no') => void
}

const MakeGuessView = ({ character, currentQuestion, questions, onAnswer }: MakeGuessViewProps) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold text-center">Faire deviner</h2>
      <CharacterCard character={character} />
      <p className="text-gray-700 text-center text-2xl font-bold mt-2">{currentQuestion?.question ?? '...'}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button
          disabled={currentQuestion === null}
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => onAnswer("yes")}>
          Oui
        </button>
        <button
          disabled={currentQuestion === null}
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => onAnswer("no")}>
          Non
        </button>
      </div>
      <AskedQuestions questions={questions} />
    </div>
  );
};

export default MakeGuessView