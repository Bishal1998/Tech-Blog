import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import app from '../../../Firebase'
import axios from 'axios';

const CreatePost = () => {

    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imageFileUploadStatus, setImageFileUploadStatus] = useState(null);
    const [imageFileUploadError, setImageFileUploadError] = useState(null);
    const [publishError, setPublishError] = useState(null);
    const [formData, setFormData] = useState({
        image: "",
        title: "",
        content: "",
        category: ""
    });

    const navigate = useNavigate();

    const { currentUser } = useSelector(state => state.auth)
    const handleImageUpload = async (e) => {
        e.preventDefault();
        try {

            if (!imageFile) {
                setImageFileUploadError("Please select an image.");
                return;
            }
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
                    setImageFileUploadError("Couldn't upload file");

                    setImageFileUploadStatus(null);
                    setImageFile(null);
                    setImageFileUrl(null);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageFileUrl(downloadURL);
                        setFormData({ ...formData, image: downloadURL });
                    })
                }
            )

        } catch (error) {
            setImageFileUploadError(error)
        }
    }

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.content) {
            setPublishError("All fields are required")
            return;
        }

        try {
            setPublishError(null);
            const res = await axios.post('/api/post/create', formData);
            if (res.status === 201) {
                navigate(`/${res.data.slug}`)
            }
        } catch (error) {
            setPublishError(error.message)
        }

    }


    return currentUser.isAdmin ?
        <section className='w-full mx-auto'>
            <h2 className='text-center text-3xl font-kumbh text-white font-medium py-4'>Create Post</h2>
            <form className='w-[90%] mx-auto flex flex-col justify-center gap-6' onSubmit={handlePostSubmit}>
                <div className='flex flex-col md:flex-row justify-between gap-4'>
                    <input type="text" placeholder='Title' name='title' className='flex-1 border border-dark-15 bg-dark-15 outline-none shadow-[0_0_0_4px_#191919] p-5 rounded-lg font-inter text-dark-40 text-lg mb-4' onChange={e => setFormData({ ...formData, title: e.target.value })} />
                    <select name="category" className='border border-dark-15 bg-dark-15 outline-none shadow-[0_0_0_4px_#191919] p-5 rounded-lg font-inter text-dark-40 text-lg mb-4' onChange={e => setFormData({ ...formData, category: e.target.value })}>
                        <option value="uncategorized">Select a Category</option>
                        <option value="react">React</option>
                        <option value="javascript">JavaScript</option>
                        <option value="next">Nextjs</option>
                    </select>
                </div>
                <div className='flex justify-between items-center gap-4 border-4 border-yellow-55 border-dotted p-3'>
                    <input type="file" name="image" accept='image/*' className='cursor-pointer file:rounded-full file:py-2 file:px-6 file:outline-none file:border-none file:bg-yellow-55 text-white hover:file:bg-yellow-70' onChange={(e) => setImageFile(e.target.files[0])} />
                    <button className='whitespace-nowrap bg-dark-15 border border-dark-15 px-4 py-3 rounded-xl flex items-center hover:bg-dark-20 cursor-pointer text-white' onClick={handleImageUpload}>
                        {
                            imageFileUploadStatus ? <div className='w-16 h-16'>
                                <CircularProgressbar value={imageFileUploadStatus} text={`${imageFileUploadStatus || 0}%`} />
                            </div>
                                : "Upload Image"
                        }
                    </button>
                </div>
                {
                    imageFileUploadError && <p className='py-1 px-2 lg:py-[6px] lg:px-[10px] bg-red-600 rounded-[4px] text-base lg:text-xl font-medium font-inter text-white w-fit'>{imageFileUploadError}</p>
                }
                {formData.image && <img src={formData.image} alt='image' className='w-full h-72 object-cover' />}
                <ReactQuill theme='snow' placeholder="What's on your mind?" className='h-72 mb-12' onChange={value => setFormData({ ...formData, content: value })} />
                <button className='w-full p-5 rounded-lg border-yellow-55 bg-yellow-55 font-inter text-xl text-dark-8 hover:bg-yellow-60 font-medium' type='submit'>
                    Publish
                </button>
                {
                    publishError && <p className='py-1 px-2 lg:py-[6px] lg:px-[10px] bg-red-600 rounded-[4px] text-base lg:text-xl font-medium font-inter text-center text-white w-fit'>{publishError}</p>
                }
            </form>
        </section>
        :
        <Navigate to={'/dashboard'} />
}

export default CreatePost