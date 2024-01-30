import React from 'react'
import { Input } from '../../../constants/components'

const Profile = () => {
    return (
        <section className='w-full pt-4 flex flex-col justify-center items-center'>
            <h2 className='font-medium text-white font-inter text-xl'>Profile</h2>

            <div className='min-h-screen w-full flex flex-col items-center justify-start mt-12'>
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-full w-40 h-40 object-cover border-[10px] border-dark-30' />
                <form className='w-full flex flex-col items-center'>
                    <Input title="Username" type="email" name="username" value="username" />
                    <Input title="Email" type="email" name="email" value="Email" />
                    <Input title="Password" type="text" name="password" value="Password" />
                    <button className='w-full sm:w-[500px] p-5 rounded-lg border-dark-15 bg-yellow-55 font-inter text-xl text-dark-8 hover:bg-yellow-60 font-medium' type='submit'>
                        Update
                    </button>
                </form>

            </div>
        </section>
    )
}

export default Profile