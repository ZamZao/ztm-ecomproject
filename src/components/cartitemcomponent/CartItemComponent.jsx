import React from 'react'
import { StyledCartItemComponent } from './StyledCartItemComponent'


const CartItemComponent = ({item: { imageUrl,price, name,quantity }}) => {
    return (
        <StyledCartItemComponent>
            <img src={imageUrl} alt={name+"thumbnail"}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
            
        </StyledCartItemComponent>
    )
}

export default CartItemComponent
 