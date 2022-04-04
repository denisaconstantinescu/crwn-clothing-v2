import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  let navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const goToCart = ()=> {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem=> (
            <CartItem 
            key={cartItem.id}
            item={cartItem}
            />
          ))
        }
        </div>
      <Button onClick={goToCart}>GO TO CHECKOUT</Button>
    </div>)

};

export default CartDropdown;

