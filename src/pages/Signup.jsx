import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import Title from '../components/Title'
import logoLogin from '../assets/images/logo-login.png'

const Signup = () => {
    const [invalidUsername,setInvalidUsername] = useState(false)
    const [invalidCpassword,setInvalidCpassword] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if(data){
           
        }
        
    };

  return (
    <Title title='Sing up'>
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
                        <h4 className="text-dark margin-b2 text-center text-dark">Sign Up</h4>

                        <form action="/" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="form-group col l-12 c-12">
                                    <div className="error-text">
                                        {errors.fullName?.type === 'required' && "Full name is required"}
                                    </div>
                                    <input type="text" className="form-control" id="name" placeholder="Full Name"
                                    {...register("fullName", { required: true, maxLength: 50 })}
                                    />
                                    
                                </div>

                                <div className="form-group col l-12 c-12">
                                    <div className="error-text">
                                        {errors.username?.type === 'required' && "Username is required"}
                                        {invalidUsername&&<span>Email has already exist</span>}
                                    </div>
                                    <input type="username" className="form-control" id="username" placeholder="Username"
                                    {...register("username", { 
                                        required: true ,
                                        // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
                                        })
                                    }
                                    />
                                </div>

                                <div className="form-group col l-12 c-12">
                                    <div className="error-text">
                                        {errors.password?.type === 'required' && "Password is required"}  
                                        {errors.password?.type === 'minLength' && "Please enter more than 6 characters"}
                                    </div>
                                    <input type="password" className="form-control" id="password" placeholder="Password"
                                    {...register("password", { required: true, minLength: 6 })} 
                                    />
                                </div>

                                <div className="form-group col l-12 c-12">
                                    <div className="error-text">
                                        {errors.cpassword?.type === 'required' && "Password is required"}  
                                        {errors.cpassword?.type === 'minLength' && "Please enter more than 6 characters"}
                                        {invalidCpassword&&<span>Confirm Password not matched</span>}
                                    </div>
                                    <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password"
                                    {...register("cpassword", { required: true, minLength: 6 })} 
                                    />
                                </div>

                                <div className="col c-12">
                                    <div className="d-inline-block">
                                        <label className="control control-checkbox">
                                        <input type="checkbox" />
                                        <div className="control-indicator"></div>
                                        I Agree the terms and conditions
                                        </label>
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

export default Signup