import { StyledSignUpComponent } from './StyledSignUpComponent'
import FormInput from './FormInput'
import CustomButton from '../custombutton/CustomButton'
import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

class SignUpComponent extends Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email: '',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {

        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        const { signUpStart }=this.props

        
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        signUpStart(displayName,email,password);
    };

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({ [name]: value});
    };

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <StyledSignUpComponent>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your e-mail and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">

                <FormInput
                type='text'
                name='displayName'
                label="name"
                value={displayName}
                onChange={this.handleChange}
                required
                />
                 <FormInput
                type='email'
                name='email'
                label="email"
                value={email}
                onChange={this.handleChange}
                required
                
                />
                 <FormInput
                type='password'
                name='password'
                label='password'
                value={password}
                onChange={this.handleChange}
                required
                />
                 <FormInput
                type='password'
                name='confirmPassword'
                label='Confirm Password'
                value={confirmPassword}
                onChange={this.handleChange}
                required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </StyledSignUpComponent>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    signUpStart: (displayName,email,password) => dispatch(signUpStart({displayName,email,password}))
})

export default connect(null,mapDispatchToProps)(SignUpComponent) 