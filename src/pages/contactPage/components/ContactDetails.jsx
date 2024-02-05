import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { FaXTwitter, FaMedium, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ContactDetails = () => {
    return (
        <section className='w-full px-6 py-6 lg:px-20 lg:py-16 border-b border-dark-15 flex justify-between items-start flex-col md:flex-row flex-wrap gap-8'>
            <div className='space-y-4'>
                <p className='font-inter font-medium text-lg text-white'>General Inquiries</p>
                <div className='space-y-4'>
                    <div className='flex items-center p-2 border rounded-lg border-dark-15'>
                        <p className='text-dark-40 lg:text-lg'>contact@ai-podcasts.com</p>
                        <div className='text-yellow-55'>
                            <GoArrowUpRight size={20} />
                        </div>
                    </div>
                    <div className='flex items-center p-2 border rounded-lg border-dark-15 w-fit'>
                        <p className='text-dark-40 lg:text-lg'>+1 (123) 456-7890</p>
                        <div className='text-yellow-55'>
                            <GoArrowUpRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <p className='font-inter font-medium text-lg text-white'>Technical Support</p>
                <div className='space-y-4'>
                    <div className='flex items-center p-2 border rounded-lg border-dark-15'>
                        <p className='text-dark-40 lg:text-lg'>contact@ai-podcasts.com</p>
                        <div className='text-yellow-55'>
                            <GoArrowUpRight size={20} />
                        </div>
                    </div>
                    <div className='flex items-center p-2 border rounded-lg border-dark-15 w-fit'>
                        <p className='text-dark-40 lg:text-lg'>+1 (123) 456-7890</p>
                        <div className='text-yellow-55'>
                            <GoArrowUpRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <p className='font-inter font-medium text-lg text-white'>Our Office</p>
                <div className='space-y-4'>
                    <div className='flex items-center py-2'>
                        <p className='text-dark-40 lg:text-lg text-wrap'>
                            Address: 123 AI Tech Avenue, Techville, 54321
                        </p>
                    </div>
                    <div className='flex items-center p-2 border rounded-lg border-dark-15 w-fit'>
                        <p className='text-dark-40 lg:text-lg'>Get Directions</p>
                        <div className='text-yellow-55'>
                            <GoArrowUpRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <p className='font-inter font-medium text-lg text-white'>Connect with Us</p>
                <div className='flex items-center justify-between py-2'>
                    <Link to={'/'}>
                        <FaXTwitter size={24} color='white' />
                    </Link>
                    <Link to={'/'}>
                        <FaMedium size={24} color='white' />
                    </Link>
                    <Link to={'/'}>
                        <FaLinkedin size={24} color='white' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails