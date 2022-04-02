import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import Signup from './Components/Signup/Signup'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
    <Router>

      <Route exact path='/'>
      <Home />

      </Route>


      <Route path='/Signup'>
        <Signup/>
      </Route>

     
     </Router>


    </div>
  );
}

export default App;
