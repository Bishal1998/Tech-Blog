import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Revolution = () => {
    return (
        <section className='w-full bg-dark-10 px-6 py-6 lg:px-20 lg:py-16'>
            <div className='lg:flex justify-between items-center gap-12 hidden max-w-screen-2xl'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="121" viewBox="0 0 120 121" fill="none">
                        <path d="M79.9995 120.5V100.5C91.0661 100.5 99.9994 91.5671 99.9994 80.5005H119.999C119.999 102.634 102.066 120.5 79.9995 120.5Z" fill="#FFD11A" />
                        <path d="M79.9997 120.5V100.5C68.9331 100.5 59.9998 91.5671 59.9998 80.5005H40C40 102.634 57.9332 120.5 79.9997 120.5Z" fill="#FFD11A" />
                        <path d="M0 80.4985H19.9998C19.9998 91.5651 28.9331 100.498 39.9997 100.498V120.498C17.9332 120.498 0 102.632 0 80.4985Z" fill="#FFD11A" />
                        <path d="M0 80.4997H19.9998C19.9998 69.4331 28.9331 60.4998 39.9997 60.4998V40.5C17.9332 40.5 0 58.4332 0 80.4997Z" fill="#FFD11A" />
                        <path d="M39.9997 0.5V20.4998C28.9331 20.4998 19.9998 29.4331 19.9998 40.4997H0C0 18.4332 17.9332 0.5 39.9997 0.5Z" fill="#FFD11A" />
                        <path d="M39.9998 0.5V20.4998C51.0663 20.4998 59.9996 29.4331 59.9996 40.4997H79.9995C79.9995 18.4332 62.0663 0.5 39.9998 0.5Z" fill="#FFD11A" />
                        <path d="M119.999 40.4997H99.9991C99.9991 29.4331 91.0659 20.4998 79.9993 20.4998V0.5C102.066 0.5 119.999 18.4332 119.999 40.4997Z" fill="#FFD11A" />
                        <path d="M119.999 40.4995H99.9991C99.9991 51.5661 91.0659 60.4994 79.9993 60.4994V80.4992C102.066 80.4992 119.999 62.6327 119.999 40.4995Z" fill="#FFD11A" />
                    </svg>
                </div>
                <div className='space-y-6'>
                    <p className='py-1 px-2 lg:py-[6px] lg:px-[10px] bg-dark-20 rounded-[4px] text-base lg:text-xl font-medium font-inter text-white w-fit'>Learn, Connect, and Innovate</p>
                    <p className='text-[28px] md:text-[44px] lg:text-6xl font-medium font-kumbh text-white'>Be Part of the Future Tech Revolution</p>
                    <p className='font-inter text-gray-50 text-base '>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                </div>
            </div>

            <div className='space-y-6 lg:hidden'>
                <div className='flex items-center gap-8'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M40 59.9999V50C45.5333 50 50 45.5333 50 40H59.9999C59.9999 51.0666 51.0333 59.9999 40 59.9999Z" fill="#FFD11A" />
                            <path d="M40.0004 59.9999V50C34.4671 50 30.0004 45.5333 30.0004 40H20.0005C20.0005 51.0666 28.9671 59.9999 40.0004 59.9999Z" fill="#FFD11A" />
                            <path d="M0 39.9985H9.99995C9.99995 45.5318 14.4666 49.9985 19.9999 49.9985V59.9984C8.96663 59.9984 0 51.0652 0 39.9985Z" fill="#FFD11A" />
                            <path d="M0 39.9989H9.99995C9.99995 34.4656 14.4666 29.999 19.9999 29.999V19.999C8.96663 19.999 0 28.9656 0 39.9989Z" fill="#FFD11A" />
                            <path d="M19.9999 0V9.99995C14.4666 9.99995 9.99995 14.4666 9.99995 19.9999H0C0 8.96663 8.96663 0 19.9999 0Z" fill="#FFD11A" />
                            <path d="M20.0005 0V9.99995C25.5338 9.99995 30.0004 14.4666 30.0004 19.9999H40.0004C40.0004 8.96663 31.0338 0 20.0005 0Z" fill="#FFD11A" />
                            <path d="M59.9994 19.9999H49.9995C49.9995 14.4666 45.5328 9.99995 39.9995 9.99995V0C51.0328 0 59.9994 8.96663 59.9994 19.9999Z" fill="#FFD11A" />
                            <path d="M59.9994 19.999H49.9995C49.9995 25.5323 45.5328 29.999 39.9995 29.999V39.9989C51.0328 39.9989 59.9994 31.0656 59.9994 19.999Z" fill="#FFD11A" />
                        </svg>
                    </div>
                    <p className='py-1 px-2 bg-dark-20 rounded-[4px] text-base lg:text-xl font-medium font-inter text-white w-fit h-fit'>Learn, Connect, and Innovate</p>
                </div>
                <div>
                    <p className='text-[28px] md:text-[44px] lg:text-6xl font-medium font-kumbh text-white'>Be Part of the Future Tech Revolution</p>
                    <p className='font-inter text-gray-50 text-base '>Immerse yourself in the world of future technology. Explore our comprehensive resources.</p>
                </div>
            </div>

            <div className='rounded-xl bg-dark-8 border border-dark-15 p-2 flex flex-col lg:flex-row justify-between items-center gap-2 mt-12'>
                <article className='w-full lg:w-1/3 rounded-lg border border-dark-15 bg-dark-10 p-7 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg font-inter font-semibold text-white'>Resource Access</p>
                        <Link to="/" className='rounded-full bg-yellow-55 p-3'>
                            <GoArrowUpRight size={20} color='black' />
                        </Link>
                    </div>
                    <p className='text-gray-60 text-base font-inter'>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                </article>
                <article className='w-full lg:w-1/3 rounded-lg border border-dark-15 bg-dark-10 p-7 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg font-inter font-semibold text-white'>Resource Access</p>
                        <Link to="/" className='rounded-full bg-yellow-55 p-3'>
                            <GoArrowUpRight size={20} color='black' />
                        </Link>
                    </div>
                    <p className='text-gray-60 text-base font-inter'>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                </article>
                <article className='w-full lg:w-1/3 rounded-lg border border-dark-15 bg-dark-10 p-7 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg font-inter font-semibold text-white'>Resource Access</p>
                        <Link to="/" className='rounded-full bg-yellow-55 p-3'>
                            <GoArrowUpRight size={20} color='black' />
                        </Link>
                    </div>
                    <p className='text-gray-60 text-base font-inter'>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                </article>
            </div>

        </section>
    )
}

export default Revolution