import React from 'react'
import { StyledCheckoutPage } from './StyledCheckoutPage'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckOutItemComponent from './checkoutcomponent/CheckOutItemComponent'

import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'

const CheckoutPage = ({cartItems,totalCart}) => {
    return (
        <StyledCheckoutPage>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem)=> (
                    <CheckOutItemComponent key={cartItem.id} cartItem={cartItem}/>
                    
            ))}
            <div className="total">
                <span>Total: ${totalCart}</span>
            </div>
        </StyledCheckoutPage>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCart: selectCartItemsTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage)
