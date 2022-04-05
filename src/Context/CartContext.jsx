import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {

    const [ cartList, setCartList ] = useState([])


    // FUNCION AGREGAR AL CARRITO

    const addItem=(prod) => {

        //ELIMINAR DUPLICADOS SI ENCUENTRA MISMO ID


        if (findProd(prod.id)) {


            const item = cartList.find((p) => p.id === prod.id)
            const {cantidad}  = item 

            item.cantidad =  prod.cantidad + cantidad
            const newCartList = [ ...cartList ]
            setCartList(newCartList)

            console.log(item)
            console.log(cantidad)

        } // AGREGAR PROD NUEVO A CARTLIST SI NO TIENE MISMO ID 
        
        else {

            setCartList([ ...cartList, prod ])

        }
        
    }

    // VACIAR CARRITO

    const emptyCart = () => {
        setCartList([])
    }



    // CHEQUEAR DUPLICADOS A TRAVÉS DEL ID - TRUE/FALSE

    const findProd = (id) => {
        
       return cartList.find((item) => item.id === id)
    }

    
    
   // ELIMINAR UN SOLO ELEMENTO DEL CARRITO

   const deleteItem = (id) => {

      setCartList(cartList.filter((item) => item.id !== id))

    }

    // SUMA TOTAL

    const total = () => {

        return cartList.reduce((acum, prod) => acum = acum + (prod.price))

    }


  return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        emptyCart,
        deleteItem
   }} > 
    
        { children } 
    
    </CartContext.Provider>
  )
}

export default CartContextProvider