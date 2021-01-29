import React from 'react';
import "./App.css"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import pageHome from  './Pages/pageHome';
import pageLogin from  './Pages/pageLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={pageHome}/>
          <Route path="/login" component={pageLogin}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
