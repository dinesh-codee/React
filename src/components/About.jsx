import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const About = () => {
let navigate = useNavigate();
function handleClick() {
    navigate('/dashboard');
}
  return (
    <div>Warm welcome to about page 
        <button onClick={handleClick}>Dashboard</button>
        <Outlet/>
    </div>
  )
}

export default About