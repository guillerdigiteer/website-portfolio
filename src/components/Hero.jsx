import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen bg-background'>
            <div className='flex flex-col h-full justify-center items-center gap-8'>
                <h1 className='text-7xl font-space font-bold text-secondary'>Hello World, I'm Guiller!</h1>
                <p className='text-3xl font-space text-secondary'>Entry-level Web Developer</p>
                <button className='w-30 px-8 py-4 rounded border-0 bg-primary text-white text-2xl font-space font-medium shadow-lg shadow-slate-700'>About Me</button>
            </div>
        </div>
    )
}

export default Hero