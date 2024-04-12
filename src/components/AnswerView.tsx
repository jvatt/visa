import Image from "next/image";
import { Answer } from "@/types";

type Props = {
  answer: Answer;
  showCorrectAnswer?: boolean;
};

function AnswerView({ answer, showCorrectAnswer }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row space-x-2">
        <div>{answer.answer}</div>
        {showCorrectAnswer &&
          (answer.isCorrect ? (
            <div className="bg-green-900 px-2 rounded-sm">{`✔ ${answer.points} pts`}</div>
          ) : (
            <div>❌</div>
          ))}
      </div>
      {showCorrectAnswer && !!answer.imageUrl && (
        <Image
          alt="image not found"
          height={480}
          width={960}
          src={answer.imageUrl}
        />
      )}
    </div>
  );
}

export default AnswerView;
