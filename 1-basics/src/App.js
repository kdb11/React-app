import './App.css';
import { Calculate } from './Components/Calculate';
import { Cart } from './Components/Cart';
import { Checkout } from './Components/Checkout';
import { Movies } from './Components/Movies';
import { Product } from './Components/Product';
import { Products } from './Components/Products';
import { TestState } from './Components/TestState';

function App() {
  return (
    <div className="App">
      {/* <Calculate></Calculate>
      <Cart></Cart>
      <Checkout></Checkout>
      <TestState></TestState>
      <Product></Product>
      <Products></Products> */}
      <Movies></Movies>
    </div>
  );
}

export default App;
