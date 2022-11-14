import ItemDetail from "./ItemDetail/ItemDetail"

function ItemDetailContainer () {

        return  <main className="container-fluid-{breakpoint}" id="App-main">
                    <div className="container my-3" id="App-sub-main">
                        <ItemDetail/>
                    </div>
                </main>

}

export default ItemDetailContainer