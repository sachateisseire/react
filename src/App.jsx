import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap';
import "./app.css"
import Navbar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (

  <div className="container-{breakpoint}" id="App">

    <header className="container-fluid-{breakpoint} bg-dark sticky-top" id="App-header">
      <Navbar/>
    </header>

    <main className="container-fluid-{breakpoint}" id="App-main">

      <div className="container my-3" id="App-sub-main">
 
      <ItemList/>

      </div>
    
    </main>

    <footer className="container-fluid bg-dark" id="App-footer">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae non quia soluta praesentium reiciendis, veniam, temporibus ad facilis ipsam delectus voluptatum eos maxime repudiandae cupiditate. Voluptatibus qui adipisci cum natus.</p>
    </footer>

  </div>

  );
}



export default App;