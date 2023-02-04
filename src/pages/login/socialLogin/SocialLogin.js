import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/loading/Loading';
import './socialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubSignInLoading, githubSignInError] = useSignInWithGithub(auth);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';

    let errorElement;
    if(googleSignInError || githubSignInError){
        errorElement = <p>{googleSignInError?.message} {githubSignInError?.message}</p>
    }


    if(googleUser || githubUser){
        navigate(from, {replace: true});
    }
    


    const handleGoogleLogin = () => {
        signInWithGoogle()
    }

    const handleFacebookLogin = () => {
        alert('Please try another system. Facebook authentication system currently has development stage.')
    }
    return (
        <div>
            <div className='d-flex gap-2 align-items-center w-50 mx-auto'>
                <span className='orLine'></span>
                <span>or</span>
                <span className='orLine'></span>
            </div>
            {errorElement}
            <div className='mt-3 mx-auto w-100'>
                <button onClick={handleGoogleLogin} className='btn btn-danger me-2'>Continue with Google</button>
                <button onClick={handleFacebookLogin} className='btn btn-danger me-2'>Continue with Facebook</button>
                <button onClick={() => signInWithGithub()} className='btn btn-danger'>Continue with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;