import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../../../constants/components'
import { useSelector } from 'react-redux'

const Profile = () => {

    const { currentUser } = useSelector(state => state.auth)
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const imagePickerRef = useRef();

    const handleImageChanger = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file)
            setImageFileUrl(URL.createObjectURL(file)) // creating temporary url for image
        }
    }

    useEffect(() => {
        if (imageFile) {
            uploadImage();
        }
    }, [imageFile])

    const uploadImage = async () => {
        console.log("uploadig")
    }

    return (
        <section className='w-full pt-4 flex flex-col justify-center items-center'>
            <h2 className='font-medium text-white font-inter text-4xl'>Profile</h2>

            <div className='min-h-screen w-[90%] flex flex-col items-center justify-start mt-12'>
                <form className='w-full flex flex-col items-center'>
                    <img src={imageFileUrl || currentUser.profilePicture} alt={currentUser.username} className='rounded-full w-40 h-40 object-cover border-[10px] border-dark-30 self-center cursor-pointer' onClick={() => imagePickerRef.current.click()} />
                    <input type="file" accept='image/*' onChange={handleImageChanger} ref={imagePickerRef} className='hidden' />
                    <Input title="Username" type="email" name="username" value={currentUser.username} />
                    <Input title="Email" type="email" name="email" value={currentUser.email} />
                    <Input title="Password" type="text" name="password" value={currentUser.password} />
                    <button className='w-full sm:w-[500px] p-5 rounded-lg border-dark-15 bg-yellow-55 font-inter text-xl text-dark-8 hover:bg-yellow-60 font-medium' type='submit'>
                        Update
                    </button>
                </form>
                <div className='w-[90%] sm:w-[500px] py-4 flex justify-between items-center font-inter font-medium text-lg text-dark-35'>
                    <p className='cursor-pointer'>Delete Account</p>
                    <p className='cursor-pointer'>Sign Out</p>
                </div>
            </div>
        </section>
    )
}

export default Profile