import React from 'react'
import { StyledHeader } from './StyledHeader'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIconComponent from '../cart-icon/CartIconComponent';
import CartDropDownComponent from '../cartdropdown/CartDropDownComponent';


//reselect
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

//redux
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({currentUser,hidden,signOutStart}) => {

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
                    currentUser ? <div className='header-option' onClick={signOutStart}> SIGN OUT</div>
                    :
                    <Link className='header-option' to="/signin">
                    SIGN IN
                    </Link>
                }
                <CartIconComponent/>
            </div>
            {/* <CartDropDownComponent/> */}

           {
                hidden ? null :
                 <CartDropDownComponent/>

            }
                
        </StyledHeader>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden

});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
