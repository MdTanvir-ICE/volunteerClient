import React, { useContext } from 'react';
import logo from '../Images/logos/Group 1329.png'
import google from '../Images//logos/google.png'
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { GlobalVlaue } from '../GlobalValue/GlobalValue';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(GlobalVlaue);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            console.log(result,loggedInUser);
            history.replace(from);
            
          })
          .catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
   
    
    return (
        <div className="container login">
            <img src={logo} alt=""/>
            <div className="loginBody">
                <h5>Login with</h5>
               <button className='btn' onClick={handleGoogleSignIn}><img src={google} alt=""/>Continue with google</button>
               <p>Don't have an account?<Link to="">Create an account</Link></p>
            </div>          
        </div>
    );
};

export default Login;