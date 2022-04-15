import React,{useState} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
function Login() {
 const [email,setemail]=useState('')
 const [password,setpassword]=useState('')
 const {firebase}=useContext(FirebaseContext)
 const history=useHistory()
 const handlelogin=(e)=>{
   e.preventDefault()
   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     history.push('/')
   }).catch((error)=>{
    alert(error.message)
   })
 }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
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
          <button >Login</button>
        </form>
        <a onClick={()=>history.push('/signup')} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
