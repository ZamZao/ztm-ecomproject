import React from 'react'
import SignInComponent from '../components/authentification/SignInComponent'
import SignUpComponent from '../components/authentification/SignUpComponent'
import { StyledAuthentificationPage } from './StyledAuthentificationPage'


const AuthentificationPage = () => {
    return (
        <StyledAuthentificationPage>
            <SignInComponent/>
            <SignUpComponent/>
        
        </StyledAuthentificationPage>
    )
}

export default AuthentificationPage
