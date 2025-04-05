import React, { FormEvent, useEffect, useState } from "react";


interface QuestionPanelProps {
  active: boolean
  onAskQuestion: (q: string) => void
}
const QuestionPanel: React.FC<QuestionPanelProps> = ({ active = true, onAskQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const questionContent = question.trim()
    if (questionContent) {
      onAskQuestion(questionContent);
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
        <button disabled={!active} type="submit" className="btn-primary mt-2 w-full">
          Poser la question
        </button>
      </form>
    </div>
  );
};

export default QuestionPanel;