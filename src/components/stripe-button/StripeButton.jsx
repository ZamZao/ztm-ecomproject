import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {

    const priceForStripe = price*100;
    const publishablekey = 'pk_test_51KCA1CC0wzhkVwl5NEIiw3dZcp0xbg54rIZztoPEYSPnyvbDTAJNTR6dY2Iu6Dg3wcOkikXYcz6bsHDQoG7rKoCh007GE9wkkx';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
            <StripeCheckout
                label='Pay Now'
                name='CRWN Clothing LTD.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your Total Price is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishablekey}            
            />
    )
}

export default StripeButton
