import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"
/*
  grab the API("http://localhost:4000/questions") and displya it 
  in QuestionList component
*/
function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
  }, [])

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  const newQuestionList = questions.map((question) => (
      <QuestionItem
        key={question.id}
        question={question}
        onDeleteQuestion={handleDeleteQuestion}
      />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{newQuestionList}</ul>
    </section>
  );
}

export default QuestionList;