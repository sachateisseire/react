import { createContext, useState } from "react";

const cartContext = createContext()

function CartContextProvider(props){
    const [cart, setCart] = useState (["Cart"])
    return (
        <>
            <cartContext.Provider value={{cart: cart}}>
                {props.children}
            </cartContext.Provider>
        </>
    )
}

export {cartContext, CartContextProvider}