import React, { useEffect, useState } from 'react'
import { Google, Input, Submit } from '../../constants/components'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signInStart, signInSuccess, signInFailure } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {

    const [login, setLogin] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading, error: errorMessage, success: successMessage } = useSelector(state => state.auth);

    useEffect(() => {
        if (pathname.toLocaleLowerCase() === "/login") {
            setLogin(true);
        }
    }, [pathname])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signInStart());

        if (!formData.username || !formData.password || !formData.email) {
            return dispatch(signInFailure("All fields are mandatory."));
        }

        try {
            const res = await axios.post("/api/auth/signup", formData);
            if (res.statusText === "OK") {
                dispatch(signInSuccess(res.data));
                navigate("/login");
                setFormData({
                    username: "",
                    email: "",
                    password: ""
                })
            }

        } catch (error) {
            return dispatch(signInFailure(error.message));
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(signInStart());

        if (!formData.email || !formData.password || formData.email === "" || formData.password === "") {
            return dispatch(signInFailure("All fields are mandatory."));
        }

        try {
            const res = await axios.post("/api/auth/signin", formData);
            if (res.statusText === "OK") {
                dispatch(signInSuccess(res.data));
                navigate("/");
                setFormData({
                    username: "",
                    email: "",
                    password: ""
                })
            }
        } catch (error) {
            return dispatch(signInFailure(error.message));
        }
    }


    return (
        <section className='flex flex-col justify-center items-center gap-8 w-screen h-screen p-4'>
            <h2 className='text-yellow-55 font-kumbh text-6xl font-medium'>{login ? "Login" : "Signup"}</h2>
            {
                errorMessage && <p className='py-1 px-2 lg:py-[6px] lg:px-[10px] bg-red-600 rounded-[4px] text-base lg:text-xl font-medium font-inter text-white w-fit'>{errorMessage}</p>
            }
            {
                successMessage && <p className='py-1 px-2 lg:py-[6px] lg:px-[10px] bg-yellow-55 rounded-[4px] text-base lg:text-xl font-medium font-inter text-white w-fit'>User Registered Successfully</p>
            }
            <form className='flex flex-col gap-2 w-full items-center justify-center' onSubmit={pathname === "/login" ? handleLogin : handleSubmit}>
                {
                    !login && <Input title="Enter Username" type="text" name="username" handleChange={handleChange} value={formData.username} />
                }
                <Input title="Enter Email" type="email" name="email" handleChange={handleChange} value={formData.email} />
                <Input title="Enter Password" type="password" name="password" handleChange={handleChange} value={formData.password} />
                <Submit loading={loading} pathname={pathname} />
            </form>
            <Google />
            <p className='text-dark-40 font-inter text-lg font-medium'>{!login ? "Have an account? " : "Don't have an account? "}
                <Link to={`${login ? '/signup' : '/login'}`} className='text-white cursor-pointer' onClick={() => setLogin(!login)}>{login ? "Signup" : "Login"}</Link>
            </p>
        </section>
    )
}

export default Signup