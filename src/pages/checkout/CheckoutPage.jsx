import React from 'react'
import { StyledCheckoutPage } from './StyledCheckoutPage'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckOutItemComponent from './checkoutcomponent/CheckOutItemComponent'

import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'
import StripeButton from '../../components/stripe-button/StripeButton'

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
            <div className="test-warning">
                * Please use the following test credit card for payment*
                <br/>
                cardnumber:42 424242424242 exp date 01/22 cvc 123

            </div>
            <StripeButton price={totalCart}/>


        </StyledCheckoutPage>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCart: selectCartItemsTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage)
