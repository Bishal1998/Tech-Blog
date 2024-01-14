import React from 'react'
import { DesktopLogo, MobileLogo, LaptopLogo } from '../../assets/Logo'
import { navItems } from '../data'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className='bg-dark-10 p-4'>
            <nav className='max-w-7xl flex items-center justify-between mx-auto'>
                <Link to='/'>
                    <DesktopLogo />
                </Link>
                <div className='text-gray-50 font-inter flex items-center gap-12 text-lg justify-center '>

                    {
                        navItems.map((item) => {
                            const { id, title, link } = item;
                            return <NavLink to={link} key={id} className={({ isActive }) => isActive ? ' text-white bg-dark-8 rounded-xl p-4 ' : 'p-4'} >{title}</NavLink>
                        })
                    }
                </div>
                <Link to='/contact'>
                    <button className='font-inter text-lg text-dark-8 font-medium bg-yellow-55 rounded-xl p-4'>
                        Contact Us
                    </button>
                </Link>
            </nav>
        </section>
    )
}
export default Navbar