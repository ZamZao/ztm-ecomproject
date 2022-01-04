import { StyledSignUpComponent } from './StyledSignUpComponent'
import FormInput from './FormInput'
import CustomButton from '../custombutton/CustomButton'
import React, {useState } from 'react'

// Redux
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

const SignUpComponent = ({signUpStart}) => {
    

    const [credentials, setCredentials] = useState({ 
            displayName:'',
            email: '',
            password:'',
            confirmPassword:''
    })

    const {displayName,email,password,confirmPassword} = credentials;
    
    const handleSubmit = async event => {

        event.preventDefault();
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        signUpStart(displayName,email,password);
    };

    const handleChange = event => {
        const {name,value} = event.target;
        setCredentials({ ...credentials,[name]: value});
    };
        return (
            <StyledSignUpComponent>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your e-mail and password</span>
                <form onSubmit={handleSubmit} className="sign-up-form">

                <FormInput
                type='text'
                name='displayName'
                label="name"
                value={displayName}
                onChange={handleChange}
                required
                />
                 <FormInput
                type='email'
                name='email'
                label="email"
                value={email}
                onChange={handleChange}
                required
                
                />
                 <FormInput
                type='password'
                name='password'
                label='password'
                value={password}
                onChange={handleChange}
                required
                />
                 <FormInput
                type='password'
                name='confirmPassword'
                label='Confirm Password'
                value={confirmPassword}
                onChange={handleChange}
                required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </StyledSignUpComponent>
        )
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (displayName,email,password) => dispatch(signUpStart({displayName,email,password}))
})

export default connect(null,mapDispatchToProps)(SignUpComponent) 