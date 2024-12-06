import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CounterProvider } from './Contexts/CounterContext';
import { CartProvider } from './Ecom App/Contexts/CartContext';


// function MyComponent(){
//   const name = "Samarth Kalshetti";
//   const link = "http://samkporfolio.wuaze.com/"
//   return (
//     // <h2>Hello {name}</h2>
//     <div>
//     <h2>The sum is {Add(10,5)}</h2>
//     <h2>Click here to go to my website <a href={link}>Click here</a> </h2>
//     </div>
//   )
// }

// function Add(x,y){
//   return x+y;
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyComponent/>    */}
    {/* <CounterProvider> */}
    <CartProvider>
    <App/>

    </CartProvider>

    {/* </CounterProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
