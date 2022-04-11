import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import { AuthContext } from './store/Context';
import {FirebaseContext} from './store/Context'
import Create from './Components/Create/Create'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setuser }=useContext(AuthContext)
  const {firebase }=useContext(FirebaseContext )
  useEffect(()=>{
      firebase.auth().onAuthStateChanged((user=>{
        setuser(user)
      }))
  }) 
  return (

    <div>
    <Router>

      <Route exact path='/'>
      <Home />
      </Route>

      <Route path='/Signup'>
        <Signup/>
      </Route>


      <Route path='/login'>
        <Login/>
      </Route>

      <Route>
        <Create/>
      </Route>

      
  

     
     </Router>


    </div>
  );
}

export default App;
