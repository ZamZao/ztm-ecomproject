import { StyledSignUpComponent } from './StyledSignUpComponent'
import FormInput from './FormInput'
import CustomButton from '../custombutton/CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import React, { Component } from 'react'

export default class SignUpComponent extends Component {
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
        console.log("hi");
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName}); 
            
            this.setstate = {
            displayName:'',
            email: '',
            password:'',
            confirmPassword:''
            }
        } catch (error) {
            console.log('ops error',error);
           }
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
