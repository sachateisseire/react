import Cards from "./Cards/Cards"
import { getNftData, getNftByCategory } from "../../../mockAPI/mockAPI"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ItemList(props){
    const [nftList, setNftList] = useState ([])
    const {categoryID} = useParams()

    useEffect(
    () => {
        if (categoryID === undefined) {
            getNftData().then((data) => {
                setNftList(data)
            })
        } else {
            getNftByCategory(categoryID).then((data) => {
                setNftList(data)
            })
        }
    }, [categoryID])

    return (
        
        <div className="row row-cols-1 row-cols-md-4 g-4">
            
            {nftList.map((nft) =>{
                return <Cards
                            key={nft.id}
                            id={nft.id}
                            img={nft.img}
                            title={nft.title}
                            price={nft.price}
                            detail={nft.detail}
                            category={nft.category}
                            stock={nft.stock}
                        />
            })}
            
        </div>
    )
}

export default ItemList