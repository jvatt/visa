"use client";
import { Quiz } from "@/types";
import QuestionView from "./QuestionView";
import QuizButton from "./QuizButton";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
type Props = {
  quiz: Quiz;
};

function QuizView({ quiz }: Props) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersEnabled, setAnswersEnabled] = useState(false);

  const { questions } = quiz;
  const question = questions[questionIndex];

  const previousQuestion = useCallback(() => {
    if (questionIndex - 1 > -1) {
      setQuestionIndex(questionIndex - 1);
    }
  }, [questionIndex]);

  const nextQuestion = useCallback(() => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  }, [questionIndex, questions]);

  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "A") {
        setAnswersEnabled(!answersEnabled);
      } else if (e.key === "ArrowLeft") {
        previousQuestion();
      } else if (e.key === "ArrowRight") {
        nextQuestion();
      }
    },
    [answersEnabled, previousQuestion, nextQuestion],
  );

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp, false);
    return () => window.removeEventListener("keyup", onKeyUp, false);
  }, [onKeyUp]);

  function toggleAnswers(event: ChangeEvent<HTMLInputElement>) {
    setAnswersEnabled(event.target.checked);
  }

  return (
    <div className="flex items-center flex-col" tabIndex={0}>
      <div>{quiz.title}</div>
      <div className="flex flex-row justify-between">
        <QuizButton className="bg-blue-300 h-12" onClick={previousQuestion}>
          {"<--"}
        </QuizButton>
        <div className="flex flex-col px-5">
          <div>{`Question: ${questionIndex + 1} / ${questions.length}`}</div>
          <QuestionView
            question={question}
            key={question.question}
            answersEnabled={answersEnabled}
          />
        </div>
        <QuizButton className="bg-blue-300 h-12" onClick={nextQuestion}>
          {"-->"}
        </QuizButton>
      </div>

      <div className="space-x-1">
        <input
          type="checkbox"
          id="answers"
          onChange={toggleAnswers}
          checked={answersEnabled}
        />
        <label htmlFor="answers">Answers mode (shift+a)</label>
      </div>
    </div>
  );
}

export default QuizView;
