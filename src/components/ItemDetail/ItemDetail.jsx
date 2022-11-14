import Cards from "../Cards/Cards"
import { getNftData } from "../../mockAPI/mockAPI"
import { useState, useEffect } from "react"

function ItemDetail(props){
    const [nftList, setNftList] = useState ([])

    useEffect(
    () => {
        getNftData().then((data) => {
            setNftList(data)
        })
    }
    )

    return (
        
        <div className="row row-cols-1 row-cols-md-4 g-4 my-1">
            
            {nftList.map((nft) =>{
                return <Cards
                            key={nft.id}
                            img={nft.img}
                            title={nft.title}
                            price={nft.price}
                            detail={nft.detail}
                        />
            })}
            
        </div>
    )
}

export default ItemDetail