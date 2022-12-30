import React, { ChangeEvent, useState, FormEvent } from 'react';
import Button from '../Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IUserRegistration } from '../../types/user';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { registration } from '../../store/action-creators/auth';
import { useAuth } from '../../hooks/useAuth';

const initialUser: IUserRegistration = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
}

const SignUp = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState<IUserRegistration>(initialUser);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;

        setUser(user => ({
            ...user,
            [target.name]: target.value
        }))
    }

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        dispatch(registration(user));
        setUser(initialUser);
        navigate('/');
    }

    return (
        <form 
            className="auth__body card__body card__body_p16"
            onSubmit={onFormSubmit}
            >
                    
            <label className='auth__label'>
                Enter your Email:
                <input 
                    type="email" 
                    name='email' 
                    className='auth__input input' 
                    placeholder='Email'
                    onChange={onChangeHandler}
                    value={user.email!}
                    />
            </label>
            <label className='auth__label'>
                Enter your fist name:
                <input 
                    type="text" 
                    name='firstName' 
                    className='auth__input input' 
                    placeholder='First name'
                    onChange={onChangeHandler}
                    value={user.firstName!}
                />
            </label>
            <label className='auth__label'>
                Enter your last name:
                <input 
                    type="text" 
                    name='lasttName' 
                    className='auth__input input' 
                    placeholder='Last name'
                    onChange={onChangeHandler}
                    value={user.lastName!}
                />
            </label>
            <label className='auth__label'>
                Enter your password:
                <input 
                    type="password" 
                    name='password' 
                    className='auth__input input' 
                    autoComplete='off' 
                    placeholder='Password'
                    onChange={onChangeHandler}
                    value={user.password!}
                />
            </label>

            <Button 
                type='submit' 
                className='auth__btn' 
                size='small'>
                Sign In
            </Button>

            <p>
                Already have account? <Link className='auth__link' to='/login'>Sign in</Link>
            </p>
        </form>
    );
};

export default SignUp;