import React from 'react'
import { StyledCustomButton } from './StyledCustomButton'

const CustomButton = ({children, inverted,isGoogleSignIn,   ...otherProps}) => {
    return (
        <StyledCustomButton 
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}`}
        {...otherProps}>
            {children}
        </StyledCustomButton>
    )
}

export default CustomButton 