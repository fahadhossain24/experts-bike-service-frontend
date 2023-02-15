import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location }} replace></Navigate>
    }
    if(!user.emailVerified){
        return <div className='w-50 mx-auto text-center mt-5'>
            <h2>Your Email is not verified!</h2>
            <h3>Please verify you email address</h3>
            <h4 onClick={async() => {
                await sendEmailVerification();
                alert('email sended');
                }} className='btn btn-danger'>send verification mail again</h4>
        </div>
    }
    
    return children;
};

export default RequireAuth;