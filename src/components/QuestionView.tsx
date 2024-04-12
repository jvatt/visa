import { Question } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import AnswerView from "./AnswerView";
import QuizButton from "./QuizButton";

type Props = {
  question: Question;
  answersEnabled: boolean;
};

function QuestionView({ question, answersEnabled }: Props) {
  const [answerVisible, setAnswerVisible] = useState(false);

  const showAnswer = useCallback(() => {
    if (answersEnabled) {
      setAnswerVisible(!answerVisible);
    }
  }, [answerVisible, answersEnabled]);

  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "w") {
        showAnswer();
      }
    },
    [showAnswer],
  );

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp, false);
    return () => window.removeEventListener("keyup", onKeyUp, false);
  }, [onKeyUp]);

  useEffect(() => {
    setAnswerVisible(false);
  }, [answersEnabled]);

  const { multipleChoice } = question;

  return (
    <div className="min-h-[666px] w-[960px] overflow-scroll space-y-5">
      <div>{question.question}</div>

      {question.media?.videos &&
        question.media.videos.map((v) => (
          <video height={480} width={960} controls src={v.url} key={v.url} />
        ))}

      {question.media?.images &&
        question.media.images.map((v) => (
          <Image
            alt="image not found"
            height={480}
            width={960}
            src={v.url}
            key={v.url}
          />
        ))}

      {answerVisible && !multipleChoice && (
        <div className="space-y-1">
          {question.answers.map((a) => (
            <AnswerView
              answer={a}
              key={a.answer}
              showCorrectAnswer={answerVisible}
            />
          ))}
        </div>
      )}

      {multipleChoice && (
        <MultipleChoice question={question} showCorrectAnswer={answerVisible} />
      )}
      {answersEnabled && (
        <QuizButton className="p-2" onClick={showAnswer}>
          Toggle answer (w)
        </QuizButton>
      )}
    </div>
  );
}

type MultipleChoiceProps = {
  question: Question;
  showCorrectAnswer: boolean;
};

function MultipleChoice({ question, showCorrectAnswer }: MultipleChoiceProps) {
  return (
    <div className="space-y-1">
      {question.answers.map((a) => (
        <AnswerView
          answer={a}
          showCorrectAnswer={showCorrectAnswer}
          key={a.answer}
        />
      ))}
    </div>
  );
}

export default QuestionView;
