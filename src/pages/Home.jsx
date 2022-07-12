import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const checkLogin = localStorage.getItem('sessionToken');
  useEffect(() => {
    if(!checkLogin){
      navigate('/signin');
    }
  }, [navigate])
  
  return (
    <div>Home</div>
  )
}

export default Home