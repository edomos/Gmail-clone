import { Button } from '@mui/material';
import React from 'react';
import './Login.css'
import { login } from '../features/userSlice';
import { getAuth, signInWithPopup } from 'firebase/auth'
import { signInWithGoogle, provider, auth } from '../firebase-config'
import { useDispatch } from 'react-redux';


function Login() {
    const dispatch = useDispatch();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then(({user}) => {
          dispatch(
              login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
          }))
        })
        .catch((error) => alert(error.message));
      };

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/60892c3c3b8ef955c8019cbb_new_gmail_logo.svg" />
            <Button className="login__button" variant='contained' color='primary' onClick={signInWithGoogle}>Login</Button>
            </div>
        </div>
    )
}

export default Login;
