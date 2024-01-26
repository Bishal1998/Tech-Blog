import React from 'react'
import { FaGoogle } from "react-icons/fa";

const Google = () => {
    return (
        <div className='flex justify-center items-center gap-4 font-inter text-dark-40 text-lg rounded-lg border border-dark-15 hover:bg-dark-15 p-5 w-full sm:w-[500px] cursor-pointer'>
            <FaGoogle size={24} color='orange' />
            <p>Continue with Google</p>
        </div>
    )
}

export default Google