import React from 'react'
import CustomButton from '../custombutton/CustomButton'
import { StyledCartDropDownComponent} from './StyledCartDropDownComponent'

const CartDropDownComponent = () => {
    return (
        <StyledCartDropDownComponent >
            <div className="cart-items">

            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
            
        </StyledCartDropDownComponent>
    )
}


export default CartDropDownComponent;
