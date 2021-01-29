import React from 'react';
import Header from '../Components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from  '../Home/Home';
import Login from  '../Components/Login/Login';
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
