import React from 'react'
import CartItemComponent from '../cartitemcomponent/CartItemComponent'
import CustomButton from '../custombutton/CustomButton'
import { StyledCartDropDownComponent} from './StyledCartDropDownComponent'
import { connect } from 'react-redux'
import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'



const CartDropDownComponent = ({cartItems,cartTotalPrice, dispatch}) => {
    const navigate=useNavigate();
    // function handleClick (){
    //     console.log('hello');
    //     useNavigate("/checkout");
    // }

    return (
    
        <StyledCartDropDownComponent >
            <div className="cart-items">
                { cartItems.length ? 
                (   <>
                    { cartItems.map((item) => (
                        <CartItemComponent item={item} key={item.id}/>
                        ))
                    }
                        <div className="cart-totalprice">
                        <span className="price">{`Total Cart Price $${cartTotalPrice}`}</span>
                    </div>
                    </>
                    ) : (
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>
            <CustomButton onClick={ () => {
                navigate("/checkout");
                dispatch(toggleCartHidden());
            }

            }>
                    GO TO CHECKOUT
            </CustomButton>
            
        </StyledCartDropDownComponent>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    cartTotalPrice: selectCartItemsTotalPrice(state)
    
})


export default connect(mapStateToProps)(CartDropDownComponent);
