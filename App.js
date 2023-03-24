import { useState } from "react";
function App()
{
  const questions=[
    {
      questionText:"Which is the frontend framework used for creating applications?",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:true},
        {answerText:"Mongodb",isCorrect:false},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    },
    {
      questionText:"Abbrevation of MERN stack is",
      answerOption:[
        {answerText:"Module Express Ready Note",isCorrect:false},
        {answerText:"MongoDB ExpressJS ReactJS NodeJS",isCorrect:true},
        {answerText:"Music East Renew Node",isCorrect:false},
        {answerText:"None of these",isCorerect:false}
      ] 
    },
    {
      questionText:"Which of the following is not a JavaScript Framework",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:false},
        {answerText:"Mongodb",isCorrect:true},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    },
    {
      questionText:"Which is the frontend framework used for creating applications.",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:true},
        {answerText:"Mongodb",isCorrect:false},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    },
    {
      questionText:"Which is the frontend framework used for creating applications.",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:true},
        {answerText:"Mongodb",isCorrect:false},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    },
    {
      questionText:"which is the frontend framework used for creating applications.",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:true},
        {answerText:"Mongodb",isCorrect:false},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    },
    {
      questionText:"which is the frontend framework used for creating applications.",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:true},
        {answerText:"Mongodb",isCorrect:false},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    }, 
    {
      questionText:"which is the frontend framework used for creating applications.",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:true},
        {answerText:"Mongodb",isCorrect:false},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    },
    {
      questionText:"which is the frontend framework used for creating applications.",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:true},
        {answerText:"Mongodb",isCorrect:false},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    },
    {
      questionText:"which is the frontend framework used for creating applications.",
      answerOption:[
        {answerText:"Nodejs",isCorrect:false},
        {answerText:"Reactjs",isCorrect:true},
        {answerText:"Mongodb",isCorrect:false},
        {answerText:"Expressjs",isCorerect:false}
      ] 
    }
  ]
    const [currentQuestion, setCurrentQuestion]=useState(0)
    const [showScore,setShowScore]=useState(false)
    const [score,setScore]=useState(0)
    const Handle=(isCorrect)=>{
      if(isCorrect)
      {
        setScore(score+1)
      }
      const nextQuestion=currentQuestion+1
      if(nextQuestion<questions.length)
      {
        setCurrentQuestion(nextQuestion)
      }
    else
    {
      setShowScore(true)
    }
  }
  return(
    <div className="quiz">
        {showScore ?(
              <div className="score-section">
              YOU HAVE SCORED {score} OUT OF {questions.length}!!!
              </div>
          ):(
            <>
              <div className="question-section">
                <span>QUESTION:{currentQuestion+1}</span> of {questions.length}
              </div>
              <div className="question-text">
              {questions[currentQuestion].questionText}
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOption.map((answerOption) =>(
                  <button className="glow-on-hover" onClick={() =>Handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
              </div>
            </>
          )
        }
    </div>
      )
}
export default App