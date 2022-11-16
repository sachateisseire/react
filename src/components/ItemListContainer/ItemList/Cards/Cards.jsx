import React from "react";
import { Link} from "react-router-dom"
import ItemCount from "../../../ItemCount/ItemCount";

function Cards(props){
    return (
<>
        <div className="col">
          <div className="card rounded-4 bg-dark border border-dark border-2 my-3">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body rounded-4 text-bg-dark">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{`Price: ${props.price} ETH`}</p>
              <ItemCount initial={1} stock={props.stock}/>
              <div className="container d-flex justify-content-around m-1">
                  <Link to={`/nft/${props.id}`} className="btn btn-secondary ">Detalles</Link>
                  <button href="#" className="btn btn-success">Comprar</button>
              </div>
            </div>
          </div>
        </div>

</>
    );
  }

export default Cards;