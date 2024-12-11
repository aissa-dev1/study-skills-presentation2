import { useState } from "react";

export function FunFactsAndQuiz() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const correctAnswer = "GPU";

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="bg-green-100 py-10 mt-10">
      <h2 className="font-bold text-3xl text-center mb-6">
        Fun Facts and Quiz
      </h2>
      <div className="max-w-xl mx-auto">
        <ul className="list-disc pl-5 mb-6">
          <li>
            Did you know? The motherboard connects all your components together!
          </li>
          <li>
            Did you know? The PSU (power supply) gives power to all the parts!
          </li>
        </ul>
        <div className="bg-white rounded-lg shadow-lg p-4 mx-4">
          <h3 className="font-bold text-lg mb-2">Quiz</h3>
          <p>Which part is responsible for graphics?</p>
          <ul className="mt-4">
            {["CPU", "RAM", "GPU"].map((answer) => (
              <li
                key={answer}
                className={`bg-gray-100 p-2 rounded mb-2 cursor-pointer ${
                  selectedAnswer === answer
                    ? answer === correctAnswer
                      ? "bg-green-300"
                      : "bg-red-300"
                    : ""
                }`}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </li>
            ))}
          </ul>
          {selectedAnswer && (
            <p className="mt-4 font-bold">
              {selectedAnswer === correctAnswer ? "Correct!" : "Try Again!"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
