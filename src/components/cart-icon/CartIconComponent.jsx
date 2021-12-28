import React from 'react'
import { StyledCartIconComponent } from './StyledCartIconComponent'
import {ReactComponent as Shoppingcon} from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'


// Redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartIconComponent = ({toggleCartHidden,itemCount}) => {
    return (
        <StyledCartIconComponent onClick={toggleCartHidden}>
            <Shoppingcon className='shopping-icon' />
            <span className="item-count">
                {itemCount}
            </span>
            
        </StyledCartIconComponent>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state),
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIconComponent);
