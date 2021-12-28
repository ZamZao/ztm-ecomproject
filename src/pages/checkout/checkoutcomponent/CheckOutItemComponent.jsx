import React from 'react'
import { StyledCheckOutItemComponent } from './StyledCheckOutItemComponent'


const CheckOutItemComponent = ({cartItem:{name,imageUrl,price,quantity} }) => {
    return (
        <StyledCheckOutItemComponent>
            <div className="image-container">
                <img src={imageUrl}alt = "Key" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">${price}</span>
            <div className="remove-button">&#10005;</div>
        </StyledCheckOutItemComponent>
    )
}

export default CheckOutItemComponent
