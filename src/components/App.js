import React, {useState} from 'react';
import Dashboard from "./Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignIn from "./SingIn";
import SingUp from './SignUp';

function App() {

  return (
       <Router>
               <Switch>
                   <Route exact path='/' component={SignIn}/>
                   <Route path="/dashboard" component={Dashboard} />
                   <Route path='/singup' component={SingUp} />
               </Switch>
       </Router>
  );
}

export default App;
