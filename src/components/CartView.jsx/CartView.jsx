import React, {useContext} from "react"
import { cartContext } from "../../context/cartContext"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

function CartView() {
    const { cart } = useContext(cartContext)
    console.log(cart)

    return (
        cart.map( nft => (
        <>
            <div className="modal-body">
            <div>{nft.id}</div>
            <div>{nft.count}</div>
            </div>
        </>
        ))
    )
}

export default CartView