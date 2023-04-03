import './App.css';
import { Calculate } from './Components/Calculate';
import { Calculator } from './Components/Calculator';
import { Cart } from './Components/Cart';
import { Account } from './Components/Account';
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
      <Movies></Movies>
      <Calculator></Calculator>
      <Calculate></Calculate>
      <TestState></TestState>
      <Formula></Formula>
      <Product></Product>
      <Products></Products>
       */}
      <Account></Account>
      
    </div>
  );
}

export default App;
