import React from 'react'
import { StyledCheckOutItemComponent } from './StyledCheckOutItemComponent'
import { connect } from 'react-redux'
import { clearItemFromCart, removeItem,addItem} from '../../../redux/cart/cart.actions'

const CheckOutItemComponent = ({cartItem,clearItemFromCart,DecrementOrRemoveItemFromCart,IncrementItemFromCart}) => {
    
    const {name,imageUrl,price,quantity} = cartItem;
    return (
        <StyledCheckOutItemComponent>
            <div className="image-container">
                <img src={imageUrl}alt = "Key" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div  
                onClick={()=> {
                    DecrementOrRemoveItemFromCart(cartItem)}} 
                className="qtymodifier" >
                    &#60;
                </div> 
                <span className="value">
                    {quantity} 
                </span>
                <div
                onClick={()=> {
                    IncrementItemFromCart(cartItem)}}
                className="qtymodifier"> &#62;
                </div> 
            </span>
            <span className="price">  ${price}</span>
            <div onClick={() => clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>
        </StyledCheckOutItemComponent>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    DecrementOrRemoveItemFromCart: item => dispatch(removeItem(item)),
    IncrementItemFromCart: item => dispatch(addItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckOutItemComponent)
