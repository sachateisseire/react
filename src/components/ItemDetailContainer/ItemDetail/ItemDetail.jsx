import CardDetail from "./CardDetail/CardDetail"
import { getNftDetail } from "../../../mockAPI/mockAPI"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ItemDetail(props){
    const [nft, setNft] = useState ([])
    const [feedbackMsg, setFeedbackMsg] = useState(null)
    const {id} = useParams()

    useEffect(
    () => {
        getNftDetail(id).then((data) => {
            setNft(data)
        })
        .catch((error) => {
            setFeedbackMsg(error.message)
        })
    }, [id])

    return (
        
        <div className="container-fluid d-flex justify-content-center">
            
            {feedbackMsg !== null ? 
                <h4 className="my-5">Error: {feedbackMsg}</h4>
                :
            
            <CardDetail price={nft.price} img={nft.img} detail={nft.detail} title={nft.title} stock={nft.stock} id={nft.id} category={nft.category}/>
            }
            
        </div>
    )
}

export default ItemDetail