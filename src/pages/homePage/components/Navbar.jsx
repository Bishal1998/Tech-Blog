import React from 'react'
import { DesktopLogo } from '../../../assets/Logo'
import { navItems } from '../../../constants/data'

const Navbar = () => {
    return (
        <section className='bg-dark-10 p-4'>
            <nav className='max-w-7xl flex items-center justify-between mx-auto'>
                <DesktopLogo />
                <div className='text-gray-50 font-inter flex items-center gap-10 text-lg '>

                    {
                        navItems.map((item) => {
                            const { id, title, active, link } = item;
                            return <a key={id} href={link} className={`${active ? 'bg-dark-8 rounded-xl p-4 border-dark-20 border text-white font-medium' : ""} `}>{title}</a>
                        })
                    }
                </div>
                <button className='font-inter text-lg text-dark-8 font-medium bg-yellow-55 rounded-xl p-4'>Contact Us</button>
            </nav>
        </section>
    )
}

export default Navbar