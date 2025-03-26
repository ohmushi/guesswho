'use client'

import MakeGuessView from "@/components/MakeGuessView"
import { characters } from "@/data/characters"
import { GameQuestion } from "@/domain/game-question"
import { useState } from "react"

const MakeGuessPage = () => {
  const character = characters[0]
  const [currentQuestion, setCurrentQuestion] = useState<GameQuestion | null>({
    question: "Chauve ?",
    answer: null
  } satisfies GameQuestion);
  const [questions, setQuestions] = useState<GameQuestion[]>([])

  const handleAnswerQuestion = async (answer: 'yes' | 'no') => {
    // TODO
    if (!currentQuestion) return

    const answered = { ...currentQuestion, answer: answer } satisfies GameQuestion
    setQuestions([...questions, answered])
    setCurrentQuestion(null)
  }



  return (
    <MakeGuessView
      character={character}
      currentQuestion={currentQuestion}
      questions={questions}
      onAnswer={handleAnswerQuestion}
    />
  )
}

export default MakeGuessPage