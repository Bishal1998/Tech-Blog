import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../../../constants/components'
import { useSelector } from 'react-redux'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import app from '../../../Firebase'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Profile = () => {

    const { currentUser } = useSelector(state => state.auth)
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imageFileUploadStatus, setImageFileUploadStatus] = useState(null);
    const [imageFileUploadError, setImageFileUploadError] = useState(null);
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


    // firebase media upload
    const uploadImage = async () => {

        setImageFileUploadError(null);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + imageFile.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImageFileUploadStatus(progress.toFixed(0))
        },
            (error) => {
                setImageFileUploadError("Couldn't upload file (File Must be Less Than 2 MB");

                setImageFileUploadStatus(null);
                setImageFile(null);
                setImageFileUrl(null);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setImageFileUrl(downloadURL))
            }
        )
    }

    return (
        <section className='w-full pt-4 flex flex-col justify-center items-center'>
            <h2 className='font-medium text-white font-inter text-4xl'>Profile</h2>

            <div className='min-h-screen w-[90%] flex flex-col items-center justify-start mt-12'>
                <form className='w-full flex flex-col items-center gap-4'>

                    <div className='relative'>
                        <img src={imageFileUrl || currentUser.profilePicture} alt={currentUser.username} className={`rounded-full w-40 h-40 object-cover border-[10px] border-dark-30 self-center cursor-pointer ${imageFileUploadStatus && imageFileUploadStatus < 100 && "opacity-60"}`} onClick={() => imagePickerRef.current.click()} />
                        {
                            imageFileUploadStatus && (
                                <CircularProgressbar value={imageFileUploadStatus || 0} text={`${imageFileUploadStatus}%`} strokeWidth={5} styles={{
                                    root: {
                                        width: '160px',
                                        height: '160px',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    },
                                    path: {
                                        stroke: `rgba(62,152,199, ${imageFileUploadStatus / 100})`
                                    }
                                }} />
                            )
                        }
                    </div>
                    {
                        imageFileUploadError && <p className='py-1 px-2 lg:py-[6px] lg:px-[10px] bg-red-600 rounded-[4px] text-base lg:text-xl font-medium font-inter text-white w-fit'>{imageFileUploadError}</p>
                    }
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