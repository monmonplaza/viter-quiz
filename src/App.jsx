import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Quiz from './components/pages/Quiz'
import Intro from './components/pages/Intro'
const App = () => {
  return (
    <>
   <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route index element={<Intro/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App