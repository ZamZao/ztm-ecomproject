import React from 'react'
import { StyledHeader } from './StyledHeader'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
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
                {
                    currentUser ? <div className='header-option' onClick={() => auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className='header-option' to="/signin">
                    SIGN IN
                    </Link>
                }
            </div>
        </StyledHeader>
    )
}

export default Header
