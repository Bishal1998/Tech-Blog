import React, { useEffect, useState } from 'react'
import { Google, Input, Submit } from '../../constants/components'
import { useLocation } from 'react-router-dom';

const Signup = () => {

    const [login, setLogin] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.toLocaleLowerCase() === "/login") {
            setLogin(true);
        }
    }, [pathname])

    return (
        <section className='flex flex-col justify-center items-center gap-8 w-screen h-screen p-4'>
            <h2 className='text-yellow-55 font-kumbh text-6xl font-medium'>{login ? "Login" : "Signup"}</h2>
            <form className='flex flex-col gap-2 w-full items-center justify-center'>
                {
                    !login && <Input title="Enter Username " />
                }
                <Input title="Enter Email" />
                <Input title="Enter Password" />
                <Submit />
            </form>
            <Google />
            <p className='text-dark-40 font-inter text-lg font-medium'>{!login ? "Have an account? " : "Don't have an account? "}<span className='text-white cursor-pointer' onClick={() => setLogin(!login)}>{login ? "Signup" : "Login"}</span> </p>
        </section>
    )
}

export default Signup