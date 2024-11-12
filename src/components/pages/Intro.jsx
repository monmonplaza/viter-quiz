import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <>
        <section className='w-full h-screen flex items-center justify-center bg-secondary'>
            <div className='max-w-[460px] p-5 rounded-md bg-primary text-center py-8'>
                <h4>Welcome to our quiz</h4>
                <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestiae consequuntur ducimus neque quas, pariatur obcaecati aspernatur voluptatum qui maxime!</p>
                <Link to="/quiz" className='btn btn-accent inline-block'>Start</Link>
            </div>
        </section>
    </>
  )
}

export default Intro