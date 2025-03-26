export interface GameQuestion {
    question: string
    answer: Answer | null
}

export type Answer = 'yes' | 'no'