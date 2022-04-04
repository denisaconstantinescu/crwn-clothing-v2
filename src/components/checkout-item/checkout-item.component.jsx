

import './checkout-item.style.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, id, price } = cartItem;
    const { clearItemfromCart, removeItemFrom, addItemToCart } = useContext(CartContext);

    const removeItemFromHandler = ()=> removeItemFrom(cartItem);
    const addItemToCartHandler= ()=> addItemToCart(cartItem);

    const clearItemfromCartHandler = () => {
        clearItemfromCart(cartItem)
    }

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${id}`} />
            </div>

            <span className='name'>
                {name}
            </span>

            <span className='price'>
                {price}
            </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemFromHandler}>
                    &#10094;
                </div>

                <span className='value'>
                {quantity}
                </span>

                <div className='arrow' onClick={addItemToCartHandler}>
                    &#10095;

                </div>
            </span>

            <div className='remove-button' onClick={() => clearItemfromCartHandler()}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem;