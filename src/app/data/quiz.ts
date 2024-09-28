export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "J.K. Rowling",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "90°C", "100°C", "150°C"],
    correctAnswer: "100°C",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    correctAnswer: "Au",
  },
];
