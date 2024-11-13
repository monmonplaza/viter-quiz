import { PartyPopper } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [correctAnswer, setCorrectAnswer] = React.useState(0)
    const [showResult, setShowResult] = React.useState(false)
    const [isActive, setIsActive] = React.useState(null)
    const [randomize, setRandomize] = React.useState(null)
    const [selectedAnswer, setSelectedAnswer] = React.useState(null)
    const questions = [
        {
            id:1,
            question: "q1Lorem ipsum dolor sit amet consectetur adipisicing eli?",
            choices: [
                {
                    choice: "A. Lorem, ipsum dolor A", 
                    isCorrect: true
                },
                {
                    choice: "B. Lorem, ipsum dolor B", 
                    isCorrect: false
                },
                {
                    choice: "C. Lorem, ipsum dolor C", 
                    isCorrect: false
                },
                {
                    choice: "D. Lorem, ipsum dolor D", 
                    isCorrect: false
                },
            ]
          
        }, 
        {
            id:2,
            question: "q2 dolor sit amet consectetur adipisicing eli?",
            choices: [
                {
                    choice: "A. Q2 Lorem, ipsum dolor A", 
                    isCorrect: false
                },
                {
                    choice: "B. Q2Lorem, ipsum dolor B", 
                    isCorrect: false
                },
                {
                    choice: "C. Q2 Lorem, ipsum dolor C", 
                    isCorrect: true
                },
                {
                    choice: "D. Q2 Lorem, ipsum dolor D", 
                    isCorrect: false
                },
            ]
          
        },
        {
            id:3,
            question: "q3 adipisicing eli dolor sit amet consectetur ?",
            choices: [
                {
                    choice: "A. Q3 Lorem, ipsum dolor A", 
                    isCorrect: false
                },
                {
                    choice: "B. Q3 Lorem, ipsum dolor B", 
                    isCorrect: false
                },
                {
                    choice: "C. Q3 Lorem, ipsum dolor C", 
                    isCorrect: true
                },
                {
                    choice: "D. Q3 Lorem, ipsum dolor D", 
                    isCorrect: false
                },
            ]
           
        },
        {
            id:4,
            question: "q4 consectetur adipisicing eli dolor sit amet  ?",
            choices: [
                {
                    choice: "A. Q4 Lorem, ipsum dolor A", 
                    isCorrect: false
                },
                {
                    choice: "B. Q4 Lorem, ipsum dolor B", 
                    isCorrect: true
                },
                {
                    choice: "C. Q4 Lorem, ipsum dolor C", 
                    isCorrect: false
                },
                {
                    choice: "D. Q4 Lorem, ipsum dolor D", 
                    isCorrect: false
                },
            ]
        },
        {
            id:5,
            question: "q5 xxxconsectetur adipisicing eli dolor sit amet?",
            choices: [
                {
                    choice: "A. Q5 Lorem, ipsum dolor A", 
                    isCorrect: false
                },
                {
                    choice: "B. Q5 Lorem, ipsum dolor B", 
                    isCorrect: true
                },
                {
                    choice: "C. Q5 Lorem, ipsum dolor C", 
                    isCorrect: false
                },
                {
                    choice: "D. Q5 Lorem, ipsum dolor D", 
                    isCorrect: false
                },
            ]
        },
    ]



    React.useEffect(() => {
        setRandomize (questions
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value))
    },[])

    const handleNextQuestion = () => {
        setCurrentQuestion(prev => prev + 1);
        setIsActive(null);
        if(currentQuestion  === questions.length - 1 ) {
            setShowResult(true)
        }
        if (selectedAnswer.isCorrect === true) {
            setCorrectAnswer(prev => prev + 1)
           }

    }

    const handleChoiceClick = (item, key) => {
       setIsActive(key)
       setSelectedAnswer(item)
    }

    const handleRetake = () => {
        setCurrentQuestion(0)
        setShowResult(false)
        setRandomize (questions
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value))
    }


  return (
    <section className='bg-secondary min-h-screen relative'>
        <header className='p-2 py-4'>
            <div className={`flex gap-4 w-full` }>
                {Array.from(Array(questions.length).keys()).map((i) => (<div key={i} className={`bg-accent h-2 rounded-md w-full ${i <= currentQuestion ? "opacity-100" : "opacity-50"}`}></div>))                
                }
            </div>
        </header>
     

        {showResult ? (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full text-center bg-primary p-5 py-10 rounded-md shadow-md`} >
            
            <div className='mb-5'>
            {correctAnswer/questions.length * 100 > 51 ? (
                <>
                    <PartyPopper size={100} strokeWidth={1} className='text-success mx-auto mb-5' />
                    <h4 className='mb-5'>Congratulation</h4>        
                    
                </>
            ) : (
                <>
                    <h4 className='mb-5 text-alert'>Failed!</h4>        
                   
                </>
            )}
            </div>

            

            <h5 className='mb-3'>You got {Math.floor(correctAnswer / questions.length * 100)}%</h5>
            <p className='text-base mb-5'>{correctAnswer}/{questions.length} Correct Answer</p>
            {correctAnswer/questions.length * 100 > 51 ? (
                <button className='btn btn-accent'>Print Certificate</button>
            ) : (
                <button onClick={handleRetake} className='btn btn-accent'>Retake Exam</button>
                )
            }
            
        </div>
        ) : (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[800px] flex flex-col items-center w-full bg-primary p-5 py-10 rounded-md shadow-md`} >
            <p className='text-center '>Question {currentQuestion + 1}/{questions.length}</p>
            <h5 className='mb-5'>{randomize !== null && randomize[currentQuestion].question}</h5>
            <ul className='space-y-3 mb-10 max-w-[400px] w-full'>
              {randomize !== null && randomize[currentQuestion].choices.map((item, key)=>(
                <li className={` bg-slate-200 rounded-full w-full ${isActive === key ? "bg-alert bg-opacity-70 [&>*]:text-white" : ""}`} key={key}>
                    <button className={`px-6 py-3 text-xs text-dark w-full`} onClick={() => handleChoiceClick(item, key)}>{item.choice}</button>
                </li>
              ))}
            </ul>
            <button className='btn btn-alert !rounded-full justify-center flex w-auto mx-auto' onClick={()=> handleNextQuestion()}>Next Question</button>
        </div>
        )} 
        
     
        

    </section>
  )
}

export default Quiz