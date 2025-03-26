import { Answer, GameQuestion } from "@/domain/game-question";

interface AskedQuestionsProps {
  questions: GameQuestion[]
}
const AskedQuestions = ({ questions }: AskedQuestionsProps) => {
  function answerToEmoji(answer: Answer | null): '❌' | '✅' | '⏳' {
    switch (answer) {
      case "yes": return '✅'
      case "no": return '❌'
      default: return '⏳'
    }
  }

  function answerToString(answer: Answer | null): string {
    switch (answer) {
      case "yes": return 'oui'
      case "no": return 'non'
      default: return '...'
    }
  }

  function questionDisplayed(q: GameQuestion): string {
    return `- ${answerToEmoji(q.answer)} ${q.question} → ${answerToString(q.answer)}`
  }
  return (
    <div className="mt-4 p-2 border rounded">
      <h2 className="text-lg font-semibold">Questions posées :</h2>
      <ul>
        {questions.map((q, index) => (
          <li key={index} className="text-gray-700">{questionDisplayed(q)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AskedQuestions