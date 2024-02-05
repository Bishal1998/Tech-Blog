import React from 'react'
import { Input } from "../../../constants/components"

const ContactForm = () => {
    return (
        <section className='w-full max-w-[1762px] px-6 py-6 lg:px-20 lg:py-16 border-b border-dark-15 flex items-center flex-col xl:flex-row xl:items-center xl:justify-start overflow-hidden'>
            <div className='flex flex-col gap-4 w-full'>
                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 18.5C30 25.1274 24.6274 30.5 18 30.5C11.3726 30.5 6 25.1274 6 18.5C6 11.8726 11.3726 6.5 18 6.5C24.6274 6.5 30 11.8726 30 18.5Z" fill="#404040" />
                    <path d="M54 18.5C54 25.1274 48.6274 30.5 42 30.5C35.3726 30.5 30 25.1274 30 18.5C30 11.8726 35.3726 6.5 42 6.5C48.6274 6.5 54 11.8726 54 18.5Z" fill="#FFD11A" />
                    <path d="M54 42.5C54 49.1274 48.6274 54.5 42 54.5C35.3726 54.5 30 49.1274 30 42.5C30 35.8726 35.3726 30.5 42 30.5C48.6274 30.5 54 35.8726 54 42.5Z" fill="#404040" />
                    <path d="M30 42.5C30 49.1274 24.6274 54.5 18 54.5C11.3726 54.5 6 49.1274 6 42.5C6 35.8726 11.3726 30.5 18 30.5C24.6274 30.5 30 35.8726 30 42.5Z" fill="#FFD11A" />
                </svg>
                <p className='font-kumbh text-white font-medium text-[44px]'>Get in Touch with AI Podcasts</p>
            </div>
            <form className='w-screen px-4'>
                <div className='flex gap-4 flex-col 2xl:flex-row'>
                    <Input type={'text'} title={'First Name'} />
                    <Input type={'text'} title={'Last Name'} />
                </div>
                <div className='flex gap-4 flex-col 2xl:flex-row'>
                    <Input type={'email'} title={'Email'} />
                    <Input type={'tel'} title={'Phone Number'} />
                </div>
                <div className='flex gap-4 flex-col w-screen sm:w-[500px] mx-auto 2xl:w-full'>
                    <label htmlFor="message" className='text-white font-inter text-lg font-medium w-full sm:w-[500px]'>Message</label>
                    <textarea name="message" id="message" className='w-full border border-dark-15 bg-dark-15 outline-none shadow-[0_0_0_4px_#191919] p-5 rounded-lg font-inter text-dark-40 text-lg mb-4'></textarea>
                </div>
                <div className='flex justify-between items-center w-screen sm:w-[500px] mx-auto 2xl:w-full'>
                    <div className='flex items-center gap-4'>
                        <input type="checkbox" name="terms" id="terms" className='appearance-none w-4 h-4 rounded bg-dark-10 border border-dark-15 checked:bg-blue-500' />
                        <p className='text-white text-base font-inter'>I agree with Terms of Use and Privacy Policy</p>
                    </div>
                    <button className='p-4 rounded-lg border-yellow-55 bg-yellow-55 font-inter text-sm text-dark-8 hover:bg-yellow-60 font-medium' type='submit'>
                        Publish
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm