import { Answer, GameQuestion } from "@/domain/game-question";

interface AskedQuestionsProps {
  questions: GameQuestion[];
  currentQuestion: GameQuestion | null;
}
const AskedQuestions = ({
  currentQuestion,
  questions,
}: AskedQuestionsProps) => {
  function answerToEmoji(answer: Answer | null): "❌" | "✅" | "⏳" {
    switch (answer) {
      case "yes":
        return "✅";
      case "no":
        return "❌";
      default:
        return "⏳";
    }
  }

  function answerToString(answer: Answer | null): string {
    switch (answer) {
      case "yes":
        return "oui";
      case "no":
        return "non";
      default:
        return "...";
    }
  }

  function questionDisplayed(q: GameQuestion): string {
    return `- ${answerToEmoji(q.answer)} ${q.question} → ${answerToString(q.answer)}`;
  }

  function questionsOrderedAsMostRecentFirst(
    questions: GameQuestion[],
  ): GameQuestion[] {
    return questions.sort(
      (b, a) =>
        (a.askedAt?.getDate() ?? Date.now()) -
        (b.askedAt?.getDate() ?? Date.now()),
    );
  }
  return (
    <div className="mt-4 p-2 border rounded">
      <h2 className="text-lg font-semibold">Questions posées :</h2>
      <ul>
        {currentQuestion && (
          <li key={currentQuestion.id} className="text-gray-700">
            {questionDisplayed(currentQuestion)}
          </li>
        )}
        {questionsOrderedAsMostRecentFirst(questions).map((q) => (
          <li key={q.id} className="text-gray-700">
            {questionDisplayed(q)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AskedQuestions;
