import {Link} from "react-router-dom"
import ItemCount from "../../../ItemCount/ItemCount";
import {useState} from "react"


function CardDetail(props){
  const[count, setCount] = useState(0)

  function handleAddToCart (count) {
    console.log("Agregaste items al carrito: ", count)
    setCount(count)
  }

    return (
<>
<div className="col-sm-4">
          <div className="card rounded-4 bg-dark border border-dark border-2 my-3">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body rounded-4 text-bg-dark">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{`Price: ${props.price} ETH`}</p>
                <p className="card-text">{props.detail}</p>

                {count === 0 ?
                <ItemCount onAddToCart={handleAddToCart} initial={1} stock={props.stock} id={props.id}/> :  <a href="/x">Ver el carrito</a>
                }
            </div>
          </div>
        </div>


</>
    );
  }

export default CardDetail;



