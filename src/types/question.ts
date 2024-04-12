export type Question = {
  question: string;
  multipleChoice?: boolean;
  answers: Answer[];
  media?: {
    videos?: Media[];
    images?: Media[];
  };
};

export type Answer = {
  answer: string;
  isCorrect: boolean;
  points: number;
  imageUrl?: string;
};

export type Media = {
  url: string;
};
