import React,{useState} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useContext } from 'react';

function Login() {
 const [email,setemail]=useState('')
 const [password,setpassword]=useState('')
 const {firebase}=useContext(FirebaseContext)

 const handlelogin=(e)=>{
   e.preventDefault()
   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     alert('logged in')
   }).catch((error)=>{
    alert('error.message')
   })
 }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handlelogin} >Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
