import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Profile, Sidebar } from './components';

const Dashboard = () => {

    const [tab, setTab] = useState("");
    const { currentUser } = useSelector(state => state.auth)
    const { search } = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(search).get("tab")
        if (urlParams) {
            setTab(urlParams)
        }
    }, [search])

    return currentUser ?
        <section className='flex justify-between'>
            <div className='hidden lg:flex flex-col w-1/5 bg-dark-10 min-h-screen py-2 px-4'>
                <Sidebar />
            </div>
            {tab === "profile" &&
                <div className='w-1/2'>
                    <Profile />
                </div>}
        </section> :
        <Navigate to="/signup" />

}

export default Dashboard