import React, {useContext} from "react"
import { cartContext } from "../../context/cartContext"

function CartView() {
    const { cart } = useContext(cartContext)

    return (
        cart.map( nft => (
        <>
            <div className="modal-body">
                <h4>{nft.id}</h4>
                <h4>{nft.count}</h4>
                <h4>Total Price: {nft.price * nft.count} ETH</h4>
                <button>X</button>

            </div>
        </>
        ))
    )
}

export default CartView