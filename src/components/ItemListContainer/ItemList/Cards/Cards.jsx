import React from "react";
import {useState} from "react"
import { Link } from "react-router-dom"
import ItemCount from "../../../ItemCount/ItemCount";

function Cards(props){
  const[count, setCount] = useState(0)

  function handleAddToCart (count) {
    console.log("Agregaste items al carrito: ", count)
    setCount(count)
  }



    return (
<>
        <div className="col">
          <div className="card rounded-4 bg-dark border border-dark border-2 my-3">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="container card-body rounded-4 text-">


              <div className="row justify-content-center">

              <div className="col-5 p-1">
              <h5 className="card-title bg-dark">{props.title}</h5>
              <p className="card-text bg-dark">{`Price: ${props.price} ETH`}</p>
              </div>
              <div className="col-5 d-flex justify-content-center align-items-center">

              <Link to={`/nft/${props.id}`} className="btn btn-secondary">Detalles</Link>

              </div>

              </div>


            </div>
          </div>
        </div>

</>
    );
  }

export default Cards;


