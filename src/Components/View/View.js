import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';

function View() {
  const [userdetails,setuserdetails]=useState()
  const {postdetails} =useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const {userID}=postdetails
      firebase.firestore().collection('users').where('id','==',userID).get().then((res)=>{
       res.forEach(doc=>{
              setuserdetails(doc.data())
       })
      })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postdetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postdetails.price}</p>
          <span>{postdetails.name}</span>
          <p>{postdetails.category}</p>
          <span>{postdetails.createAt}</span>
        </div>

        {
          userdetails&&
        <div className="contactDetails">
          <p>Seller details</p>
        <p>{userdetails.username}</p>
          <p>{userdetails.number}</p>
        </div>
}
      </div>
    </div>
  );
}
export default View;
