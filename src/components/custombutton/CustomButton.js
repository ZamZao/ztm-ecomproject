import React from 'react'
import { StyledCustomButton } from './StyledCustomButton'

const CustomButton = ({children, isGoogleSignIn,   ...otherProps}) => {
    return (
        <StyledCustomButton 
        className={`${isGoogleSignIn ? 'google-sign-in' : ''}`}
        {...otherProps}>
            {children}
        </StyledCustomButton>
    )
}

export default CustomButton 