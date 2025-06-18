import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
let navigate = useNavigate();
function handleClick() {
    navigate('/dashboard');
}
  return (
    <div>Warm welcome to about page 
        <button onClick={handleClick}>Dashboard</button>
    </div>
  )
}

export default About