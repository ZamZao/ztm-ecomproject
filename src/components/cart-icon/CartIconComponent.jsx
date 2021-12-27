import React from 'react'
import { StyledCartIconComponent } from './StyledCartIconComponent'
import {ReactComponent as Shoppingcon} from '../../assets/shopping-bag.svg'



// Redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartIconComponent = ({toggleCartHidden}) => {
    return (
        <StyledCartIconComponent onClick={toggleCartHidden}>
            <Shoppingcon className='shopping-icon' />
            <span className="item-count">
                0
            </span>
            
        </StyledCartIconComponent>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIconComponent);
