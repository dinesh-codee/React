import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const Home = () => {
    function handleClick() {
    navigate('/about');
}       
    let navigate = useNavigate();

    return (
        <div>Warm Welcome to Home page
            <button onClick={handleClick}>About</button>
            <Outlet/>
        </div>
    )
}

export default Home