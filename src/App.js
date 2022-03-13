import './App.css';
// import Restaurant from './components/restaurant';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";
 import Domino from './components/component/Domino'
 import Home from './home'
import Burgerking from './components/component Burger/BurgerKing';
import Coffeday from './components/component Coffe Day/coffeeday';


function App() {
  return (
    <div className="App">
   <Router>
     <Routes>
     <Route exact path="/" element={<Home />}/>
          {/* <Route path="pizzahut" element={<PizzaHut />} /> */}
          <Route path='dominos' element={<Domino/>}></Route>
          <Route path="burgerking" element={<Burgerking />} />
          
          <Route path="coffeeday" element={<Coffeday />} />
     </Routes>
   </Router>
  </div>
  );
}

export default App;
