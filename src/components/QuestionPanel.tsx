import React, { FormEvent, useState } from "react";


interface QuestionPanelProps {
    onAskQuestion: (q: string) => void
}
const QuestionPanel: React.FC<QuestionPanelProps> = ({ onAskQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onAskQuestion(question.trim());
      setQuestion("");
    }
  };

  return (
    <div className="p-4 border rounded">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Posez une question..."
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 w-full bg-blue-500 text-white p-2 rounded">
          Poser la question
        </button>
      </form>
    </div>
  );
};

export default QuestionPanel;