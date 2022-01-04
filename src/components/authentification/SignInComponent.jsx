import React from 'react'
import { connect } from 'react-redux';
import { StyledSignInComponent } from './StyledSignInComponent';
import FormInput from './FormInput';
import CustomButton from '../custombutton/CustomButton';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { useState } from 'react';

const SignInComponent = ({emailSignInStart,googleSignInStart}) => {
    
    const [credentials,setCredentials] = useState({
            email: '',
            password:''
    })

    const {email,password} = credentials;

   const  handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email,password); 
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...credentials,[name]: value});
    }
        return (
            <StyledSignInComponent  className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    id="emailid"
                    label="email"
                    handleChange={handleChange} value={email} required/>
                    <FormInput 
                    type="password"
                    name="password" 
                    label="password"
                    id="passwordid" 
                    value={password} 
                    handleChange={handleChange}
                    required/>
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton 
                    onClick = {googleSignInStart} 
                    type="button"
                    isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                    </div>
                </form> 
            </StyledSignInComponent>
        )
    }
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () =>  dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignInComponent)
