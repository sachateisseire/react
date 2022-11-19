import CardDetail from "./CardDetail/CardDetail"
import { getNftDetail } from "../../../mockAPI/mockAPI"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ItemDetail(props){
    const [nft, setNft] = useState ([])
    const {id} = useParams()

    useEffect(
    () => {
        getNftDetail(id).then((data) => {
            setNft(data)
        })
    }, [id]
    )

    return (
        
        <div className="container-fluid d-flex justify-content-center">
            

            <CardDetail price={nft.price} img={nft.img} detail={nft.detail} title={nft.title} stock={nft.stock} id={nft.id}/>
            
            
        </div>
    )
}

export default ItemDetail