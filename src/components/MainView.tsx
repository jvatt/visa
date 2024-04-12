"use client";
import { useState } from "react";
import FilePicker from "./FilePicker";
import QuizButton from "./QuizButton";
import { Quiz } from "@/types";
import QuizView from "./QuizView";

const defaultError = "Failed to read file";

function MainView() {
  const [quizFile, setQuizfile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  async function loadQuiz() {
    setError("");
    try {
      const quizData = await quizFile?.text();
      if (!quizData) {
        setError(defaultError);
      }
      const quiz = JSON.parse(quizData || "");
      setQuiz(quiz);
    } catch (error: unknown) {
      setError((error as Error).message || defaultError);
    }
  }

  if (!quiz) {
    return (
      <div className="flex flex-col items-center max-w-[486px] space-y-5">
        <h1 className="text-xl">Select a .json file to load</h1>
        <FilePicker onSelect={setQuizfile} />
        {!!quizFile && (
          <QuizButton className="bg-blue-700 px-5 w-full" onClick={loadQuiz}>
            Load
          </QuizButton>
        )}
        {error && <div className="text-red-900">{error}</div>}
        <a className="text-blue-900 underline" href="visa/example_quiz.json">
          Download example quiz file
        </a>
      </div>
    );
  } else {
    return <QuizView quiz={quiz} />;
  }
}

export default MainView;
