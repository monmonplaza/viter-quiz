import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const questions = [
        {
            id:1,
            question: "Lorem ipsum dolor sit amet consectetur adipisicing eli?",
            choice_1: "choiceq1a",
            choice_2: "choiceq1b",
            choice_3: "choiceq1c",
            choice_4: "choiceq1d",
            answer: 0
        }, 
        {
            id:2,
            question: "dolor sit amet consectetur adipisicing eli?",
            choice_1: "choiceq2a",
            choice_2: "choiceq2b",
            choice_3: "choiceq2c",
            choice_4: "choiceq2d",
            answer: 2
        },

        {
            id:3,
            question: "adipisicing eli dolor sit amet consectetur ?",
            choice_1: "choice1",
            choice_2: "choice2",
            choice_3: "choice3",
            choice_4: "choice4",
            answer: 3
        },

        {
            id:4,
            question: "consectetur adipisicing eli dolor sit amet  ?",
            choice_1: "choice1",
            choice_2: "choice2",
            choice_3: "choice3",
            choice_4: "choice4",
            answer: 2
        },

        {
            id:5,
            question: "xxxconsectetur adipisicing eli dolor sit amet?",
            choice_1: "choice1",
            choice_2: "choice2",
            choice_3: "choice3",
            choice_4: "choice4",
            answer: 2
        },
    ]


    const handleNextQuestion = () => {
        setCurrentQuestion(prev => prev + 1)
        console.log("length", questions.length - 1)
        console.log("curr", currentQuestion)
        if(currentQuestion  === questions.length - 1 ) {
            setCurrentQuestion(0)
        }
    }


  return (
    <section className='bg-secondary min-h-screen relative'>
        <header className='p-2 py-4'>
            <div className="grid-cols-10 grid gap-4 w-full">
                {Array.from(Array(10).keys()).map((i) => (<div key={i} className='bg-accent h-2 rounded-md w-full'></div>))                
                }
            </div>
        </header>
        <div className="menu p-4">
            <Link>Home</Link>
        </div>

     
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `} >
            <p className='text-center text-warning'>Question {currentQuestion + 1}/{questions.length}</p>
            <h5 className='mb-5'>{questions[currentQuestion].question}</h5>
            <ul className='space-y-3 mb-10'>
              
                <li className='px-6 py-2 bg-slate-200 rounded-full'><button className='text-xs text-light w-full'>{questions[currentQuestion].choice_1}</button></li>
                <li className='px-6 py-2 bg-slate-200 rounded-full'><button className='text-xs text-light w-full'>{questions[currentQuestion].choice_2}</button></li>
                <li className='px-6 py-2 bg-slate-200 rounded-full'><button className='text-xs text-light w-full'>{questions[currentQuestion].choice_3}</button></li>
                <li className='px-6 py-2 bg-slate-200 rounded-full'><button className='text-xs text-light w-full'>{questions[currentQuestion].choice_4}</button></li>
                
                
            </ul>
            <button className='btn btn-accent !rounded-full justify-center flex w-auto mx-auto' onClick={()=> handleNextQuestion()}>Next Question</button>
        </div>
     
        

    </section>
  )
}

export default Quiz