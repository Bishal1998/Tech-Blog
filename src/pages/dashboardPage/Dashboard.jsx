import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {

    const { currentUser } = useSelector(state => state.auth)

    return currentUser ? <div>Dashboard</div> : <Navigate to="/signup" />

}

export default Dashboard