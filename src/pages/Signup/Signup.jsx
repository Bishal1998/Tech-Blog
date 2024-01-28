import React, { useEffect, useState } from 'react'
import { Google, Input, Submit } from '../../constants/components'
import { useLocation } from 'react-router-dom';

const Signup = () => {

    const [login, setLogin] = useState(false);
    const [formData, setFormData] = useState({});

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.toLocaleLowerCase() === "/login") {
            setLogin(true);
        }
    }, [pathname])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <section className='flex flex-col justify-center items-center gap-8 w-screen h-screen p-4'>
            <h2 className='text-yellow-55 font-kumbh text-6xl font-medium'>{login ? "Login" : "Signup"}</h2>
            <form className='flex flex-col gap-2 w-full items-center justify-center'>
                {
                    !login && <Input title="Enter Username" type="text" name="username" handleChange={handleChange} />
                }
                <Input title="Enter Email" type="email" name="email" handleChange={handleChange} />
                <Input title="Enter Password" type="password" name="password" handleChange={handleChange} />
                <Submit />
            </form>
            <Google />
            <p className='text-dark-40 font-inter text-lg font-medium'>{!login ? "Have an account? " : "Don't have an account? "}<span className='text-white cursor-pointer' onClick={() => setLogin(!login)}>{login ? "Signup" : "Login"}</span> </p>
        </section>
    )
}

export default Signup