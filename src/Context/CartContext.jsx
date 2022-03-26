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

    const deleteDuplicates = (cartList, id) => {

        const findProd = cartList.find((prod) => prod.id === id
        );


        if (findProd) {

            findProd.cantidad += 1
            setCartList ([...cartList])

        } 

    } 



  return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        emptyCart,
        deleteDuplicates
    }} > 
    
        { children } 
    
    </CartContext.Provider>
  )
}

export default CartContextProvider