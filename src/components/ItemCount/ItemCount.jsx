import React, {useState} from "react";
import { Link } from "react-router-dom"

export default function ItemCount({stock, initial, id}) {
    const [count, setCount] = useState(initial)

    function handleSubstract(){
        if (count > 1) setCount (count -1)
    }

    function handleAdd(){
        if (count < stock) setCount (count +1)
    }

    function handleAddToCart(){
        console.log("agregaste al carrito ", count)
    }

    return (
        <div class="d-flex justify-content-around p-1">
            <div class="d-flex justify-content-around p-1">
                <button onClick={handleSubstract} className="btn btn-primary btn-sm">-</button>
                <strong className="badge bg-dark bg-sm d-flex justify-content-center align-items-center m-1">{count}</strong>
                <button onClick={handleAdd} className="btn btn-primary btn-sm">+</button>
                </div>

                  <button onClick={handleAddToCart} href="#" className="btn btn-success">Comprar</button>


        </div>
    )

}