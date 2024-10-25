import React from 'react'

const Contact = () => {
    return (
        <div id='Contact' className='my-10 flex flex-col gap-12 justify-center items-center'>
            <div className='flex flex-col gap-4 text-secondary font-space'>
                <h2 className='text-5xl font-bold'>Contact Me</h2>
            </div>

            <form action="https://api.web3forms.com/submit" className='flex flex-col gap-4 text-secondary font-space text-start w-1/3' method="POST">

                <input type="hidden" name="access_key" value="b685397b-cdcc-4981-84bb-15dc9ebbe7ac" />

                <label className='text-3xl'>Full Name</label>
                <input type="text" name='name' className='field text-2xl rounded border-2 border-secondary py-2 px-4' placeholder='Enter your Full Name' required />

                <label className='text-3xl'>Email Address</label>
                <input type="text" name='email' className='field text-2xl rounded border-2 border-secondary py-2 px-4' placeholder='Enter your Email Address' required />


                <label className='text-3xl'>Message</label>
                <textarea name="message" id="" className='field mess text-2xl rounded border-2 border-secondary py-2 px-4' placeholder='Enter you Message'></textarea>

                <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                <button className='rounded bg-primary text-white py-2 px-4' type="submit">Send Message</button>
            </form>  
        </div>
    )
}

export default Contact