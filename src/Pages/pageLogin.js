import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from  '../Home/Home';
import Login from  '../Components/Login/Login';

const pageLogin = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export default pageLogin
