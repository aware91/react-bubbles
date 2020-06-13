import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      {/* <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/protected'>Protected Page</Link>
        </li>
      </ul> */}
      <div className="App">
        <PrivateRoute exact path='/protected' component={BubblePage} />
        <Route exact path="/" render={(props)=> <Login {...props}/>} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
