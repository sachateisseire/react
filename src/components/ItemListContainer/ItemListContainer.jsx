import ItemList from "./ItemList/ItemList"


function ItemListContainer () {

        return  <main className="container-fluid-{breakpoint}" id="App-main">
                    <div className="container my-3" id="App-sub-main">
                        <ItemList/>
                    </div>
                </main>

}

export default ItemListContainer