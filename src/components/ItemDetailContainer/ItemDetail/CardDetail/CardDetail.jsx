import {Link} from "react-router-dom"
import ItemCount from "../../../ItemCount/ItemCount";
import {useState} from "react"
import { useContext } from "react"
import { cartContext } from "../../../../context/cartContext";


function CardDetail(props){
  const [count, setCount] = useState(0)
  const {addToCart} = useContext(cartContext)

  function handleAddToCart (count) {
    addToCart(props, count)
    setCount(count)
  }

  if (props.title)
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
    )
    return (
      <div class="spinner-border text-light my-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    );
  }

export default CardDetail;



