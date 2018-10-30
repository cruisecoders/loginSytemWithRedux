import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/component.jsx';
import SignUp from './Components/SignUp/component.jsx'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/signUp' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
