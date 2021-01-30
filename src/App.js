import React from 'react';
import "./App.css"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import pageHome from  './Pages/pageHome';
import pageLogin from  './Pages/pageLogin';
import pageNewClient from './Pages/pageNewClient';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={pageHome}/>
          <Route path="/Login" component={pageLogin}/>
          <Route path="/addClient" component={pageNewClient}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
