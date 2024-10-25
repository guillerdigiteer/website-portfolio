import React from 'react'

const About = () => {
    return (
        <div id='About' className='my-10 flex flex-col gap-12 justify-center items-center'>
            <div className='flex flex-col gap-4 text-secondary font-space'>
                <h2 className='text-5xl font-bold'>About me</h2>
                <p className='text-2xl'>Having a 1 year of Web Development Experience</p>
            </div>

            <div className='flex gap-8'>
                <div className='flex flex-col text-start w-3/6 gap-4 font-medium font-space'>
                    <p className='text-2xl'>Know more About Me!</p>
                    <p>
                        Specialize in developing Software Applications and Web Applications, primarily focusing on the Backend Side
                    </p>

                    <p>
                        It involves designing, implementing, and maintaining server-side logic, ensuring high performance and responsiveness to requests from the
                        front end. Adept at creating robust and scalable solutions, integrating databases, and managing data storage.
                    </p>

                    <p>
                        Skill set includes working with various programming languages and frameworks to deliver efficient and effective software solutions.
                    </p>
                </div>

                <div className='flex flex-col justify-start items-start text-start w-3/6 gap-4 font-medium font-space'>
                    <p className='text-2xl'>My Toolkit</p>

                    <div className='flex flex-wrap gap-2'>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>HTML</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>CSS</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Javascript</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Ruby on Rails</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>PostgreSQL</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>SASS</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>React</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Vite</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Bootstrap</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Tailwind</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>VS Code</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Github</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Postman</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Jira</button>
                        <button className='bg-primary px-4 py-2 text-white rounded shadow-lg shadow-slate-700'>Figma</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export default About