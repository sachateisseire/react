import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap';
import "./app.css"
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (

  <div className="container-{breakpoint}" id="App">
    <BrowserRouter>

          <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryID" element={<ItemListContainer/>}/>
              <Route path="/nft/:id" element={<ItemDetailContainer/>}/>
              <Route path="*" element={ <h4>Error 404</h4> } />
            </Routes>
          <Footer/>

    </BrowserRouter>
  </div>

  );
}



export default App;