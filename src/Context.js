import { createContext, useState } from "react";

export const CartPage = createContext()

const Context = ({ children }) => {
   const [cart, setCart] = useState([]);
   return(
    <div>
        <CartPage.Provider value={{cart, setCart}}>
           {children}
        </CartPage.Provider>
    </div>
   )
}

export default Context;