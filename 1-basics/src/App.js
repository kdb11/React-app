import './App.css';
import { Calculate } from './Components/Calculate';
import { Cart } from './Components/Cart';
import { Checkout } from './Components/Checkout';
import { Movies } from './Components/Movies';
import { Product } from './Components/Product';
import { Products } from './Components/Products';

function App() {
  return (
    <div className="App">
      <Calculate></Calculate>
      <Cart></Cart>
      <Checkout></Checkout>
      <Movies></Movies>
      <Product></Product>
      <Products></Products>
    </div>
  );
}

export default App;
