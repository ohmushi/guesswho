export interface GameQuestion {
    id: string
    question: string
    answer: Answer | null
    askedAt: Date | null
}

export type Answer = 'yes' | 'no'