
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Cart from './Components/Cart/Cart';
import { Home } from './Components/Pages/Home';
function App() {
  return (
    <div className="App">
       
        <BrowserRouter>
      <Routes>
      {/* <Header/> */}
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;