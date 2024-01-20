import React, { useState, useRef } from 'react'
import { DesktopLogo, MobileLogo, LaptopLogo } from '../../assets/Logo'
import { navItems } from '../data'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {

    const [navActive, setNavActive] = useState(false);

    /* Exit Mobile Nav on Click outside of Nav */

    /* const mobileRef = useRef(null);


    const handleClick = (e) => {
        if (mobileRef.current && !mobileRef.current?.contains(e.target)) {
            setNavActive(false)
        }
    }

    document.addEventListener('click', handleClick);
    document.removeEventListener('click', handleClick) */

    return (
        <section className='bg-dark-10 p-4'>
            <nav className='lg:px-10 xl:px-40 flex items-center justify-between mx-auto'>
                <div className='md:hidden'>
                    <MobileLogo />
                </div>
                <div className='hidden md:flex 2xl:hidden'>
                    <LaptopLogo />
                </div>
                <div className='hidden 2xl:flex'>
                    <DesktopLogo />
                </div>
                <div className='lg:hidden' onClick={() => setNavActive(true)}>
                    <svg svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none" >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 10.0625C4.25 9.4757 4.7257 9 5.3125 9H28.6875C29.2743 9 29.75 9.4757 29.75 10.0625C29.75 10.6493 29.2743 11.125 28.6875 11.125H5.3125C4.7257 11.125 4.25 10.6493 4.25 10.0625ZM4.25 17.5C4.25 16.9132 4.7257 16.4375 5.3125 16.4375H28.6875C29.2743 16.4375 29.75 16.9132 29.75 17.5C29.75 18.0868 29.2743 18.5625 28.6875 18.5625H5.3125C4.7257 18.5625 4.25 18.0868 4.25 17.5ZM15.9375 24.9375C15.9375 24.3507 16.4132 23.875 17 23.875H28.6875C29.2743 23.875 29.75 24.3507 29.75 24.9375C29.75 25.5243 29.2743 26 28.6875 26H17C16.4132 26 15.9375 25.5243 15.9375 24.9375Z" fill="white" />
                    </svg >
                </div>
                <div className='hidden lg:flex text-gray-50 font-inter items-center gap-12 text-lg justify-center '>

                    {
                        navItems.map((item) => {
                            const { id, title, link } = item;
                            return <NavLink to={link} key={id} className={({ isActive }) => isActive ? ' text-white bg-dark-8 rounded-xl p-4 ' : 'hover:text-gray-60 p-4'} >{title}</NavLink>
                        })
                    }
                </div>
                <Link to='/contact' className='hidden lg:flex'>
                    <button className='font-inter text-lg text-dark-8 font-medium bg-yellow-55 rounded-xl p-4'>
                        Contact Us
                    </button>
                </Link>

                {/* mobile menu overlay */}
                {
                    navActive && (
                        <nav className='absolute z-50 top-0 right-0 bg-dark-10 h-full w-1/2 '>
                            <div className='text-gray-50 absolute right-5 top-5' onClick={() => setNavActive(false)}>
                                <AiOutlineCloseCircle size={30} />
                            </div>
                            <div className='lg:hidden text-gray-50 font-inter gap-12 text-lg flex flex-col items-center justify-center h-full '>

                                {
                                    navItems.map((item) => {
                                        const { id, title, link } = item;
                                        return <NavLink to={link} key={id} className={({ isActive }) => isActive ? ' text-white  mx-auto bg-dark-8 rounded-xl p-4 ' : 'p-4'} >{title}</NavLink>
                                    })
                                }
                                <Link to='/contact' className='lg:hidden'>
                                    <button className='font-inter text-lg text-dark-8 font-medium bg-yellow-55 rounded-xl p-4'>
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </nav>
                    )
                }
            </nav>
        </section>
    )
}
export default Navbar