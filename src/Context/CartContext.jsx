import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {

    const [ cartList, setCartList ] = useState([])


    const addItem=(prod) => {

        setCartList([ ...cartList, prod ])
        
    }

    const emptyCart = () => {
        setCartList([])
    }

    



  return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        emptyCart,
   }} > 
    
        { children } 
    
    </CartContext.Provider>
  )
}

export default CartContextProvider