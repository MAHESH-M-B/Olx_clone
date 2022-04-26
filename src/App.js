import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import { AuthContext } from './store/Context';
import {FirebaseContext} from './store/Context'
import Create from './Components/Create/Create'
import post from './store/PostContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import View from './Components/View/View';
import ViewPost from './Pages/ViewPost';

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
      <post>
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

      <Route path='/create'>
        <Create/>
      </Route>

      <Route path='/view'>
      <ViewPost/>

      </Route>

      


     
     </Router>

     </post>
    </div>
  );
}

export default App;
