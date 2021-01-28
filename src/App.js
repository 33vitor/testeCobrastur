import React from 'react';
import "./App.css"
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from  './Components/Home';
import Login from  './Components/Login/Login';
import {UserStorage} from './UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
