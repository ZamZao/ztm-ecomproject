export const addItemToCart = (cartItems, cartItemToAdd) => {
const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
);

if(existingCartItem){
        return (cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity:cartItem.quantity+1}
            : cartItem
        ))
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}];
};

export const removeItemFromCart = (cartItems,cartItemToRemove) =>{

    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

};

export const decrementItem =(cartItems,cartItemToRemove)=>{

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    // if quantity is equal to 1 then we want to remove the item from cart
    if (existingCartItem.quantity===1){
        return removeItemFromCart(cartItems,cartItemToRemove);
    }
    // otherwise we just want to decrement the quantity by one
    return (cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity-1}
        : cartItem
        ))
}
