import React, {useContext} from "react"
import { cartContext } from "../../context/cartContext"

function CartView() {
    const { cart } = useContext(cartContext)

    return (
        cart.map( nft => (
        <>
             <main className="container-fluid-{breakpoint} d-flex justify-content-center" id="App-main">
                <div className="container my-3" id="App-sub-main">
                <h4>ID del producto: {nft.id}</h4>
                <h4>Cantidad: {nft.count}</h4>
                <h4>Total Price: {nft.price * nft.count} ETH</h4>
                <button className="btn btn-danger">  
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                
                </button>

            </div>
            </main>
        </>
        ))
    )
}

export default CartView




