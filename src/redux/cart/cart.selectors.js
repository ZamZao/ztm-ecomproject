import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart], 
  cart => cart.cartItems  
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden 
)

export const selectCartItemsCount = createSelector( 
    [selectCartItems],
    cartItems => cartItems.reduce((AccumulatedQuantity, cartItem)=>AccumulatedQuantity+cartItem.quantity,0)

);

export const selectCartItemsTotalPrice = createSelector( 
    [selectCartItems],
    cartItems => cartItems.reduce((AccumulatedPrice, cartItem)=>AccumulatedPrice+(cartItem.quantity*cartItem.price),0)

);