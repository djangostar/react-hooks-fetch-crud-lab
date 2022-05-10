import React, {useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"


function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(questions => {
        setQuestions(questions)
      });
  }, []);

  const questionList = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question} 
    />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;