import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import app from '../../Firebase';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInSuccess, signInFailure } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Google = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);

            const { user } = resultsFromGoogle;
            const { displayName, email, photoURL } = user;

            const res = await axios.post("/api/auth/google", {
                name: displayName,
                email: email,
                googlePhotoUrl: photoURL
            })

            if (res.statusText === "OK") {
                dispatch(signInSuccess(res.data));
                navigate("/");
            }

        } catch (error) {
            return dispatch(signInFailure(error.message));
        }
    }

    return (
        <div className='flex justify-center items-center gap-4 font-inter text-dark-40 text-lg rounded-lg border border-dark-15 hover:bg-dark-15 p-5 w-full sm:w-[500px] cursor-pointer' onClick={handleGoogleClick}>
            <FaGoogle size={24} color='orange' />
            <p>Continue with Google</p>
        </div>
    )
}

export default Google