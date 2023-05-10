import React from "react";
import "./quizDetails/QuizDetails.css";

const Question = ({   question,
                      onAnswer,
                      onNext,
                      onPrev,
                      questionNumber,
                      totalQuestions,
                      result,
                  }) => {

    const handleAnswer = (answer) => {
        onAnswer(answer, question.correct_answer);
    };

    return (
        <div className="question-place">
            <h2>
                {questionNumber}/{totalQuestions}. {question.question}
            </h2>
            <h4>result: {result}</h4>
            <div className="buttons">
                {question.answers.map((answer, index) => (
                    <button key={index} onClick={() => handleAnswer(answer)}>
                        {answer}
                    </button>
                ))}
            </div>
            <div className="next-button">
                <button onClick={onPrev}>PREV</button>
                <button onClick={onNext}>NEXT</button>
            </div>
        </div>
    );
};

export default Question;
