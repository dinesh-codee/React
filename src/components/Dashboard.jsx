import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    function handleClick() {
        navigate('/navbar');
    }
    let navigate = useNavigate();
  return (
    <div>Welcome to Dashbord
      <Outlet/>
        <button onClick={handleClick}>Navbar</button>
    </div>
  )
}

export default Dashboard