import React from 'react'

const Input = ({ title, type, name, handleChange, value }) => {
    return (
        title &&
        <div className='w-full flex flex-col items-center'>
            <label className='text-white font-inter text-lg font-medium w-full sm:w-[500px]'>
                {title}
            </label>
            <div className='w-full sm:w-[500px]'>
                <input
                    type={type}
                    placeholder={title}
                    name={name}
                    onChange={(e) => handleChange(e)}
                    value={value}
                    className='w-full border border-dark-15 bg-dark-15 outline-none shadow-[0_0_0_4px_#191919] p-5 rounded-lg font-inter text-dark-40 text-lg mb-4'
                />
            </div>
        </div>

    )
}

export default Input