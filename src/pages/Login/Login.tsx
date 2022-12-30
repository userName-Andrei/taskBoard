import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SignIn from '../../components/SignIn';

const Login = () => {

    const {isAuth} = useAuth();

    return isAuth ? (
        <Navigate to="/" replace={true} />
    ) : (
        <div className="auth">
            <div className='auth__wrapper card'>

                    <div className="auth__top card__top card__top_center">
                        <h1 className='card__title'>Sign in</h1>
                    </div>

                    <SignIn />
            </div>
        </div>
    );
};

export default Login;