import React from 'react'
import { StyledFormInput } from './StyledFormInput'


const FormInput = ({handleChange, label, ...otherProps }) => {
    return (
        <StyledFormInput>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            { label ? ( <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null
            }   
        </StyledFormInput>
    )
}

export default FormInput
