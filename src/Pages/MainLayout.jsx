import React from 'react';
import NavBar from '../Components/Header/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
        <div className='max-w-6xl mx-auto'>
        <NavBar></NavBar></div>
        <Outlet></Outlet>
        
        </>
    );
};

export default MainLayout;