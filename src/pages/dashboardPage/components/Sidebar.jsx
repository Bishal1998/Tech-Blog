import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutFailure, signOutSuccess } from '../../../store/authSlice';
import axios from 'axios';

const Sidebar = () => {

    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth)


    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/user/signout")
            if (res.status === 200) {
                dispatch(signOutSuccess());
            }

        } catch (error) {
            dispatch(signOutFailure(error.message))
        }
    }


    return (
        <section className='hidden lg:flex flex-col justify-between items-center text-white gap-4'>
            <Link to='/dashboard?tab=profile' className='bg-dark-15 border border-dark-15 px-2 gap-2 2xl:px-16 py-3 rounded-xl flex justify-between items-center w-full hover:bg-dark-20 cursor-pointer'>
                <FaUser size={24} />
                <p className='font-medium'>Profile</p>
                <p className='border border-dark-10 bg-dark-25 py-1 px-2 rounded-md'>{currentUser.isAdmin ? 'Admin' : 'User'}</p>
            </Link>
            <div className='bg-dark-15 border border-dark-15 px-2 gap-5 2xl:px-16 py-3 rounded-xl flex items-center 2xl:gap-7 w-full hover:bg-dark-20 cursor-pointer' onClick={handleSignOut}>
                <IoLogOutOutline size={30} />
                <p className='font-medium whitespace-nowrap'>Sign Out</p>
            </div>
        </section>
    )
}

export default Sidebar