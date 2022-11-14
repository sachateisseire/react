

function Cards(props){
    return (
<>
        <div className="col">
          <div className="card rounded-4 bg-dark border border-dark border-2">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body rounded-4 text-bg-dark">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{`Price: ${props.price} ETH`}</p>
              <div className="container d-flex justify-content-around m-1">
                  <button href="#" class="btn btn-secondary ">Detalles</button>
                  <button href="#" class="btn btn-success">Comprar</button>
              </div>
            </div>
          </div>
        </div>

</>
    );
  }

export default Cards;