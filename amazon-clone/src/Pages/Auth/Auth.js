import React, { useState,useContext } from "react";
import {DataContext} from "../../Components/DataProvider/DataProvider"
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import {auth} from "../../Utility/Firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { Type } from "../../Utility/Action.type";

function Auth() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [{user},dispatch]=useContext(DataContext)

console.log(user);

 const authHandler=async(e)=>{
  e.preventDefault();
  console.log(e.target.name);
  if(e.target.name=="signin"){
    //firebase auth
    signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
       dispatch({
        type:Type.SET_USER,
        user:userInfo.user,
      })

    })
     
    
    .catch((err)=>{
      console.log(err);

    });
  } else{
createUserWithEmailAndPassword(auth,email,password)
.then((userInfo)=>{
  

 
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user,
      })

})
 .catch((err)=>{
  console.log(err);

 }) }
 };
// console.log(password,email)






  return (
    <section className={styles.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      {/* form  */}
      <div className={styles.login_container}>
        <h1>Sign in</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={styles.login_signInButton}
          >
            Sign in{" "}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          sale. Please see our Privacy Notice, our cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account button */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={styles.login_registerButton}
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;

