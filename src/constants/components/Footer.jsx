import React from 'react'
import { blogFooter, homeFooter, newsFooter, podcastFooter, resourceFooter, socialIcons } from '../data'
import { Link } from 'react-router-dom';
import NewComponent from './NewComponent'
import { GoArrowUpRight } from "react-icons/go";


const Footer = () => {
    return (
        <footer className='px-6 lg:px-10 xl:px-40 w-full' >
            <div className='flex justify-between items-start font-inter gap-4 flex-wrap'>
                <div className=''>
                    <p className='text-white text-base lg:text-xl font-medium'>Home</p>
                    <div className='flex flex-col gap-2 mt-6'>
                        {
                            homeFooter.map((item) => {
                                const { id, title, link, isNew } = item;
                                return (
                                    <div key={id}>
                                        {
                                            isNew ?
                                                <div className='flex items-center justify-center gap-3'>
                                                    <Link to={link} className='text-dark-40 lg:text-lg'>{title}</Link>
                                                    <NewComponent />
                                                </div>
                                                :
                                                <Link to={link} className='text-dark-40 lg:text-lg'>{title}</Link>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=''>
                    <p className='text-white text-base lg:text-xl font-medium'>News</p>
                    <div className='flex flex-col gap-2 mt-6'>
                        {
                            newsFooter.map((item) => {
                                const { id, title, link, isNew } = item;
                                return (
                                    <div key={id}>
                                        {
                                            isNew ?
                                                <div className='flex items-center justify-center gap-3'>
                                                    <Link to={link} className='text-dark-40 lg:text-lg'>{title}</Link>
                                                    <NewComponent />
                                                </div>
                                                :
                                                <Link to={link} className='text-dark-40 lg:text-lg'>{title}</Link>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=''>
                    <p className='text-white text-base lg:text-xl font-medium'>Blogs</p>
                    <div className='flex flex-col gap-2 mt-6'>
                        {
                            blogFooter.map((item) => {
                                const { id, title, link, isNew } = item;
                                return (
                                    <div key={id}>
                                        {
                                            isNew ?
                                                <div className='flex items-center justify-center gap-3'>
                                                    <Link to={link} className='text-dark-40 lg:text-lg'>{title}</Link>
                                                    <NewComponent />
                                                </div>
                                                :
                                                <Link to={link} className='text-dark-40 lg:text-lg'>{title}</Link>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=''>
                    <p className='text-white text-base lg:text-xl font-medium'>Podcasts</p>
                    <div className='flex flex-col gap-2 mt-6'>
                        {
                            podcastFooter.map((item) => {
                                const { id, title, link, isNew } = item;
                                return (
                                    <div key={id}>
                                        {
                                            isNew ?
                                                <div className='flex items-center justify-center gap-3'>
                                                    <Link to={link} className='text-dark-40 lg:text-lg'>{title}</Link>
                                                    <NewComponent />
                                                </div>
                                                :
                                                <Link to={link} className='text-dark-40 lg:text-lg'>{title}</Link>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=''>
                    <p className='text-white text-base lg:text-xl font-medium'>Resources</p>
                    <div className='flex flex-col gap-3 mt-6'>
                        {
                            resourceFooter.map((item) => {
                                const { id, title, link, isNew } = item;
                                return (
                                    <Link to={link} >
                                        <div key={id} className='flex items-center p-2 border rounded-lg border-dark-15'>
                                            <p className='text-dark-40 lg:text-lg'>{title}</p>
                                            <div className='text-yellow-55'>
                                                <GoArrowUpRight size={20} />
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='w-full mt-24 border-t border-dark-40 '>
                {/* Mobile View */}
                <div className='md:hidden w-full flex justify-center gap-4 mt-4 '>
                    {
                        socialIcons.map((item) => {
                            const { id, icon: Icon, link } = item;
                            return <div key={id} className='text-white'>
                                <Link to={link}>
                                    <Icon size={25} />
                                </Link>
                            </div>
                        })
                    }
                </div>

                <div className='md:flex justify-between items-center lg:text-lg '>
                    <div className='flex justify-center items-center text-dark-40 font-inter py-3 gap-2'>
                        <p>Terms & Conditions</p>
                        <div className='w-[1px] h-5 bg-dark-15' />
                        <p>Privacy Policy</p>
                    </div>
                    <div className='hidden md:flex justify-center gap-4'>
                        {
                            socialIcons.map((item) => {
                                const { id, icon: Icon, link } = item;
                                return <div key={id} className='text-white'>
                                    <Link to={link}>
                                        <Icon size={25} />
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                    <p className='text-center text-dark-40 font-inter'>© 2024 FutureTech. All rights reserved.</p>
                </div>


            </div>
        </footer>
    )
}

export default Footer