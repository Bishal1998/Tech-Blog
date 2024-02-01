import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {

    const { currentUser } = useSelector(state => state.auth)

    return currentUser.isAdmin ?
        <section className='w-full mx-auto'>
            <h2 className='text-center text-3xl font-kumbh text-white font-medium py-4'>Create Post</h2>
            <form className='w-[90%] mx-auto flex flex-col justify-center gap-6'>
                <div className='flex flex-col md:flex-row justify-between gap-4'>
                    <input type="text" placeholder='Title' name='title' className='flex-1 border border-dark-15 bg-dark-15 outline-none shadow-[0_0_0_4px_#191919] p-5 rounded-lg font-inter text-dark-40 text-lg mb-4' required />
                    <select name="" id="" className='border border-dark-15 bg-dark-15 outline-none shadow-[0_0_0_4px_#191919] p-5 rounded-lg font-inter text-dark-40 text-lg mb-4'>
                        <option value="uncategorized">Select a Category</option>
                        <option value="react">React</option>
                        <option value="javascript">JavaScript</option>
                        <option value="next">Nextjs</option>
                    </select>
                </div>
                <div className='flex justify-between items-center gap-4 border-4 border-yellow-55 border-dotted p-3'>
                    <input type="file" name="featuredImg" accept='image/*' className='cursor-pointer file:rounded-full file:py-2 file:px-6 file:outline-none file:border-none file:bg-yellow-55 text-white hover:file:bg-yellow-70' />
                    <button className='whitespace-nowrap bg-dark-15 border border-dark-15 px-4 py-3 rounded-xl flex items-center hover:bg-dark-20 cursor-pointer text-white'>Upload Image</button>
                </div>
                <ReactQuill theme='snow' placeholder="What's on your mind?" className='h-72 mb-12' />
                <button className='w-full p-5 rounded-lg border-yellow-55 bg-yellow-55 font-inter text-xl text-dark-8 hover:bg-yellow-60 font-medium' type='submit'>
                    Publish
                </button>
            </form>
        </section>
        :
        <Navigate to={'/dashboard'} />
}

export default CreatePost