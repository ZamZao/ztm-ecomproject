import React from 'react'
import CartItemComponent from '../cartitemcomponent/CartItemComponent'
import CustomButton from '../custombutton/CustomButton'
import { StyledCartDropDownComponent} from './StyledCartDropDownComponent'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'



const CartDropDownComponent = ({cartItems}) => {
    return (
    
        <StyledCartDropDownComponent >
            <div className="cart-items">
            { cartItems.map((item) => (
                    <CartItemComponent item={item} key={item.id}/>
            ))
            }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
            
        </StyledCartDropDownComponent>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    
})

export default connect(mapStateToProps)(CartDropDownComponent);
