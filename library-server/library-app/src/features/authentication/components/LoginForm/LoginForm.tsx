import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/ReduxStore';
import { loginUser } from '../../../../redux/slices/AuthenticationSlice';
import './LoginForm.css';

import { User } from '../../../../models/User';

interface LoginFormProps {
    toggleRegister(): void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ toggleRegister }) => { // Fixed destructuring here
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const auth = useSelector((state: RootState) => state.authentication);

    const dispatch: AppDispatch = useDispatch();
    const handleLoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (emailRef.current && passwordRef.current) {
            dispatch(loginUser({
                email: emailRef.current.value,
                password: passwordRef.current.value
            }));
        }
    };

    return (
        <form className='login-form'>
            <h2>please Login</h2>
            {auth.error ? <p className='login-form-error'>Username or password incorrect</p> : <></>}
            <div className="login-form-input-group">
                <h6>Email</h6>
                <input className='login-form-input' type="email" placeholder='email' name='email' required ref={emailRef} />
            </div>
            <div className="login-form-input-group">
                <h6>password</h6>
                <input className='login-form-input' type="password" placeholder='password' name='password' required ref={passwordRef} />
            </div>
            <button className='login-form-submit' onClick={handleLoginUser}>Login</button>
            <p>
                dont have an account?
                <span className='login-form-register' onClick={toggleRegister}>Create one here</span>
            </p>
        </form>
    );
};
