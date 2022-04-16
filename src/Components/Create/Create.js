import React, { Fragment,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const[name,setname]=useState()
  const [category,setcategory]=useState()
  const [price ,setprice ]=useState()
  const [image ,setimage]=useState()
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
          
              onChange={(e)=>setname(e.target.value)}
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
          <form>
            <br />
            <input type="file" onChange={(e)=>{
              setimage(e.target.files[0])
            }} />
            <br />
            <button className="uploadBtn">UPLOAD AND SUBMIT</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
