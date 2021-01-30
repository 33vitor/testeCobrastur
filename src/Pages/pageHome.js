import React from 'react';
import Header from '../Components/Home/Header';
import Home from  '../Components/Home/Home';
import {Redirect} from 'react-router-dom';

const pageHome = () => {
  const token = window.localStorage.getItem('token');
  if(!token){

     return <Redirect to="/Login" />

  }
  
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default pageHome
