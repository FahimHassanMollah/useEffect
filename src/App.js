import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyFun from './components/MyFun';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState(true)
  return (
    <>
      {/* <MyComponent/> */}
      <button onClick={()=> setFirst(!first)}>hide</button>
      ====================

     {
      first ?  <MyFun /> : null
     }
    </>
  );
}

export default App;
