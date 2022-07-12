import React from 'react'
import Title from '../components/Title'
import logoLogin from '../assets/images/logo-login.png'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/apiRequest';
import { useEffect } from 'react';
const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector(state=>state.authen.login?.error);
    const checkLogin = localStorage.getItem('sessionToken');
    useEffect(() => {
        if(checkLogin){
          navigate('/');
        }
      }, [navigate])


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
       if(data){
            const newUser = {
                username: data.username,
                password: data.password
            }
            loginUser(newUser,dispatch,navigate)
       }
    };

  return (
    <Title title='Sing in'>
        <div className="container__signup row align-items-center justify-content-center">
            <div className="col l-4 c-10">
                <div className="card">
                    <div className="card-header bg-primary">
                        <div className="card-brand">
                            <a href="/" title="Ekka">
                                <img src={logoLogin} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="card-body padding-3">
                        <h4 className="text-dark margin-b2 text-center text-dark">Sign In</h4>

                        <form action="/" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="form-group col l-12 c-12">
                                    <div className="error-text">
                                        {errors.username?.type === 'required' && "Username is required"}
                                        {error&&<div>Invalid Username or Password</div>}
                                    </div>
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                        {...register("username", { required: true})}
                                    />
                                </div>

                                <div className="form-group col l-12 c-12">
                                    <div className="error-text">
                                        {errors.password?.type === 'required' && "Password is required"}
                                    </div>
                                    <input type="password" className="form-control" id="password" placeholder="Password"
                                        {...register("password", { required: true})}
                                    />
                                </div>

                                <div className="col c-12 ">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-inline-block">
                                        <label className="control control-checkbox">
                                        <input type="checkbox" />
                                        <div className="control-indicator"></div>
                                        Remember me
                                        </label>
                                    </div>
                                    <p><a className="text-blue" href="#">Forgot Password?</a></p>
                                  </div>

                                    <button type="submit" className="btn btn-primary btn-block margin-b2">Sign Up</button>

                                    <p className="sign-upp text-dark">Already have an account?
                                        <a className="text-blue" href="sign-in.html">Sign in</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Title>
  )
}

export default Signin