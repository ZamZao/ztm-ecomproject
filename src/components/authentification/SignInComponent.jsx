import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StyledSignInComponent } from './StyledSignInComponent';
import FormInput from './FormInput';
import CustomButton from '../custombutton/CustomButton';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

class SignInComponent extends Component {
    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password:''
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email,password); 
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {

        const {googleSignInStart} = this.props;

        return (
            <StyledSignInComponent  className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    id="emailid"
                    label="email"
                    handleChange={this.handleChange} value={this.state.email} required/>
                    <FormInput 
                    type="password"
                    name="password" 
                    label="password"
                    id="passwordid" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
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
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () =>  dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignInComponent)
