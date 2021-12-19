import React from 'react'
import { StyledHeader } from './StyledHeader'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => {
    return (
        <StyledHeader>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>

            <div className='header-options'>
                <Link className='header-option' to="/shop">
                SHOP
                </Link>
                <Link className='header-option' to="/contact">
                CONTACT
                </Link>
            </div>
        </StyledHeader>
    )
}

export default Header
