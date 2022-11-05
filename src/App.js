import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import './index.css';


function App() {

    const [questions,setQuestions] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(data => setQuestions(data))
  },[])


  const [step,setStep] = useState(0)
  const [correctAnswers,setCorrectAnswers] = useState(0)
  const question = questions[step]
  const chooseVariant = (i)=>{
    setStep(step + 1)

    if(i === question.correct){
      setCorrectAnswers(correctAnswers + 1)
    }
  }


  return (
    <div className="App">
     {
      step != questions.length ? (<Quiz
      question={question}
      chooseVariant={chooseVariant}
      step={step}
      questions={questions} />
      ) : (
      <Result 
      correctAnswers={correctAnswers}
      questions={questions} 
      />
      )}
      
    </div>
  );
}

export default App;
