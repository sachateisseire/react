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
              <Route path="/detail" element={<ItemDetailContainer/>}/>
            </Routes>
          <Footer/>

    </BrowserRouter>
  </div>

  );
}



export default App;