import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../shared/loading/Loading';
import SocialLogin from '../socialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    let errorElement;
    if(error || resetPassError){
        errorElement = <p className='text-danger'>{error?.message}</p>
    }
    
    if(user){
        navigate(from, {replace: true}); 
    }
    
    if(loading){
        return <Loading></Loading>
    }

    // handle user login
    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    // handle forget password
    const handleForgetPasswordWithReset = () => {
        const email = emailRef.current.value;
        if(email){
            sendPasswordResetEmail(email);
            toast('Password reset mail sended. Please check mail box');
        }
        else{
            toast('please enter an email address');
        }
    }
    return (
        <div className='w-50 mx-auto p-5'>
            <h2 style={{ color: '#e44a58' }} className='text-center'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={handleLogin} className='w-50 d-block mx-auto' style={{ backgroundColor: '#e44a58' }} type="submit">Login</Button>
            </Form>
            {errorElement}
            <p>Don't remember password? <span onClick={handleForgetPasswordWithReset} className='text-danger' style={{cursor: 'pointer'}}>Forget password</span></p>
            <p>Dosen't have an account? <Link to='/register' className='text-decoration-none text-danger'>Go for register</Link> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;