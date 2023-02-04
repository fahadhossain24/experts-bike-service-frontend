import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/loading/Loading';
import SocialLogin from '../socialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [checked, setChecked] = useState(false);



    if (user) {
        navigate('/') // ('/') it's have been gone home page
    }

    if (loading || updating) {
        return <Loading></Loading>

    }

    const handleRegistration = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        const updateSuccess = await updateProfile({ displayName: name })
        if (updateSuccess) {
            toast('your profile updated') // I should have use react toest 
        }
        
    }
    return (
        <div className='text-center w-50 mx-auto mt-5'>
            <h2 style={{ color: '#e44a58', marginBottom: '20px' }}>Start Registration</h2>
            <form className='register-form' onSubmit={handleRegistration}>
                <input ref={nameRef} type="text" name="name" placeholder='Enter full name' autoComplete='true' required /><br />
                <input ref={emailRef} type="email" name="email" placeholder='Email address' autoComplete='true' required /><br />
                <input ref={passwordRef} type="password" name="password" placeholder='Password' autoComplete='true' required /><br />
                <div className='w-50' style={{ textAlign: 'left' }}>
                    <input onClick={() => setChecked(!checked)} className='m-2' type="checkbox" name="trams" id="" />
                    <label className={checked ? '' : 'text-danger'} htmlFor="trams">Agree our trams and condition</label>
                </div>
                <input disabled={!checked} className='btn w-50 d-block mx-auto' style={{ backgroundColor: '#e44a58', color: 'white' }} type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className='text-decoration-none text-danger' to='/login'>please login</Link> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;