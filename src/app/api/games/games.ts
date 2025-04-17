"use server-only";

import { Game } from "@/domain/game";

export const games: Game[] = [
  {
    id: "1",
    currentQuestion: {
      id: "1-3",
      question: "Est-il chauve ?",
      answer: null,
      askedAt: null,
    },
    questionsHistory: [
      {
        id: "1-2",
        question: "Est-il jeune ?",
        answer: "no",
        askedAt: new Date(),
      },
      {
        id: "1-1",
        question: "Est-ce un home ?",
        answer: "yes",
        askedAt: new Date(),
      },
    ],
  },
];
