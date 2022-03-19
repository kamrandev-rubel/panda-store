import AOS from 'aos';
import { useEffect, useState } from 'react';
import './App.css';
import AllProduct from './components/AllProduct/AllProduct';
import Menubar from './components/Menubar/Menubar';
import 'aos/dist/aos.css'

function App() {
  let [count, setCount] = useState(0);
  const setCartCount = ()=>{
    setCount(count+1)
  }
 
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className="App">
      <Menubar count={count }></Menubar>
      <AllProduct setCartCount={setCartCount}></AllProduct>
    </div>
  );
}

export default App;
