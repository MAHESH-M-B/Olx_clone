import React, { Fragment,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useContext } from 'react';
import { AuthContext, FirebaseContext } from '../../store/Context';

const Create = () => {
  const[name,Setname]=useState()
  const [category,setcategory]=useState()
  const [price ,setprice ]=useState()
  const [image ,setimage]=useState()
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const handlesubmit=()=>{
          firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
            ref.getDownloadURL().then((url)=>{
              console.log(url);
            })
          })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
          
              onChange={(e)=>Setname(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              
              onChange={(e)=>setcategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"  value={price} onChange={(e)=>setprice(e.target.value)}/>
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={ image?URL.createObjectURL(image): ''}></img>
        
            <br />
            <input type="file" onChange={(e)=>{
              setimage(e.target.files[0])
            }} />
            <br />
            <button   onClick={handlesubmit} className="uploadBtn">UPLOAD AND SUBMIT</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
