import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Spinner from '../../components/Spinner';
import { useAppSelector } from '../../hooks/useAppSelector';

const Register = () => {

    const {isAuth} = useAuth();
    const {loading} = useAppSelector(state => state.auth);

    return isAuth ? (
        <Navigate to="/" replace={true} />
    ) : (
        <div className="auth">
            <div className='auth__wrapper card'>

                <div className="auth__top card__top card__top_center">
                    <h1 className='card__title'>Registration</h1>
                </div>

                <SignUp />

            </div>
        </div>
    );
};

export default Register;