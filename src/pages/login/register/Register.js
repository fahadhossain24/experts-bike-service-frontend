import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleRegistration = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password)
    }
    return (
        <div className='text-center w-50 mx-auto mt-5'>
            <h2 style={{color: '#e44a58', marginBottom: '20px'}}>Start Registration</h2>
            <form className='register-form' onSubmit={handleRegistration}>
                <input ref={nameRef} type="text" name="name" placeholder='Enter full name' autoComplete='true' required/><br />
                <input ref={emailRef} type="email" name="email" placeholder='Email address' autoComplete='true'  required/><br />
                <input ref={passwordRef} type="password" name="password" placeholder='Password' autoComplete='true' required/><br />
                <input className='btn' style={{backgroundColor: '#e44a58', color: 'white'}} type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className='text-decoration-none text-danger' to='/login'>please login</Link> </p>
        </div>
    );
};

export default Register;