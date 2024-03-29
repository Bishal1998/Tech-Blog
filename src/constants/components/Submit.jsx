import React from 'react'

const Submit = ({ loading, pathname }) => {
    return (
        <button className='w-full sm:w-[500px] p-5 rounded-lg border-dark-15 bg-yellow-55 font-inter text-xl text-dark-8 hover:bg-yellow-60 font-medium' type='submit' disabled={loading}>

            {
                pathname === "/login" ? "Login" : loading ? "Submitting...." : "Signup"
            }
        </button>
    )
}

export default Submit