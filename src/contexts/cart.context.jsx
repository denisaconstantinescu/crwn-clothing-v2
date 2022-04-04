import { createContext, useState, useEffect } from 'react';

const addCartToItem = (cartItems, productToAdd) => {
  let itemAlreadyInCard = cartItems.find(product => product.id == productToAdd.id);

  if (itemAlreadyInCard) {
    return cartItems.map(cartItem => (
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ))
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]

}

const removeitem = (cartItems, productToBeRemoved) => {
  let itemAlreadyInCard = cartItems.find(product => product.id == productToBeRemoved.id);

  if (itemAlreadyInCard.quantity === 1) {
    return cartItems.filter(item => item.id !== productToBeRemoved.id)
  }

  return cartItems.map(cartItem => (
    cartItem.id === productToBeRemoved.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem

  ))
}

const clearCheckout = (cartItems, productToBeRemoved) => {
  console.log("intuuuuu")
  return cartItems.filter(item => item.id !== productToBeRemoved.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  totalNumberItems: 0,
  totalNumber:0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalNumberItems, setTotalNumberItems] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);

  // useEffect(()=> {
  //   const newTotal = cartItems.reduce((total, cartItem)=> (
  //     total+ cartItem.quantity, 0
  //   ))

  //   setTotalNumber(newTotal)
  // }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartToItem(cartItems, productToAdd))
  }

  const removeItemFrom = (productToAdd) => {
    setCartItems(removeitem(cartItems, productToAdd))
  }

  const clearItemfromCart = (productToAdd) => {
    setCartItems(clearCheckout(cartItems, productToAdd))
  }


  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalNumberItems, setTotalNumberItems,
     removeItemFrom, clearItemfromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
