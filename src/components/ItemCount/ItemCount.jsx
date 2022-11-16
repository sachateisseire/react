import React, {useState} from "react";

export default function ItemCount({stock, initial}) {
    const [count, setCount] = useState(1)

    function handleSubstract(){
        if (count > 1) setCount (count -1)
    }

    function handleAdd(){
        if (count < stock) setCount (count +1)
    }

    return (
        <div class="d-flex justify-content-around m-1">
            <div>
                <h4>Cantidad</h4>
            <div class="d-flex justify-content-around m-1">
                <button onClick={handleSubstract}>-</button>
                <strong>{count}</strong>
                <button onClick={handleAdd}>+</button>
            </div>
            </div>
        </div>
    )

}