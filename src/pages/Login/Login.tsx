import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SignIn from '../../components/SignIn';
import { useAppSelector } from '../../hooks/useAppSelector';
import Spinner from '../../components/Spinner';

const Login = () => {

    const {isAuth} = useAuth();
    const {loading} = useAppSelector(state => state.auth);

    return isAuth ? (
        <Navigate to="/" replace={true} />
    ) : (
        <div className="auth">
            <div className='auth__wrapper card'>

                {loading ?
                <Spinner /> :
                <>
                    <div className="auth__top card__top card__top_center">
                        <h1 className='card__title'>Sign in</h1>
                    </div>

                    <SignIn />
                </> }
            </div>
        </div>
    );
};

export default Login;