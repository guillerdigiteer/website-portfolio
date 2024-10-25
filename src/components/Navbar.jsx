import React from 'react'
import Guiller from '../assets/Guiller.jpg'


const Navbar = () => {
    return (
        <nav className='flex justify-between'>
            <div className='flex'>
                <div className='border-solid border-4 border-primary rounded-full'>
                    <img src={Guiller} alt="" className='w-16 h-16 rounded-full ' />
                </div>
                <p className='content-center text-5xl mx-12 font-space text-secondary'>Guiller Lobrio</p>
            </div>

            <div className='flex'> 
                <a className='content-center text-3xl px-4 font-space text-secondary' href="#About">About</a>
                <a className='content-center text-3xl px-4 font-space text-secondary' href="#Contact">Contact</a>

                {/* <div className='flex border-solid border-4 border-secondary rounded-full'>
                    <button onClick={handleClick} className='flex justify-center items-center content-center px-4 gap-4'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </div>
                    </button>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar