import './App.css';
import { Calculate } from './Components/Calculate';
import { Calculator } from './Components/Calculator';
import { Cart } from './Components/Cart';
import { Checkout } from './Components/Checkout';
import { Formula } from './Components/Fomula';
import { Movies } from './Components/Movies';
import { Product } from './Components/Product';
import { Products } from './Components/Products';
import { TestState } from './Components/TestState';

function App() {
  return (
    <div className="App">
      {/* 
      <Cart></Cart>
      <Checkout></Checkout>
      <Movies></Movies>
      <Calculator></Calculator>
      <Calculate></Calculate>
      <TestState></TestState>
      <Formula></Formula>
      <Product></Product>
       */}
      <Products></Products>
      
    </div>
  );
}

export default App;
