import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { CounterProvider } from './Contexts/CounterContext';
// import { CartProvider } from './Ecom App/Contexts/CartContext';
import {BrowserRouter, Routes, Router, Route, useParams,NavLink} from "react-router-dom";

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


const Home= () => {
  const[posts, setPosts] = useState([]);

  useEffect(() =>{
  
    fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((data)=> setPosts(data));

  
  

},[]);

  return(
    <div>
      <h1>Home Page</h1>
      <div className='post-container'>
        {posts.map((post) =>(
          <NavLink  className="posts" to={`/post/${post.id}`} style={{display:"block"}}>{post.title}</NavLink>
        ))}
      </div>
    </div>
  )
}



const About= () => {
  return(
    <div>
      <h1>About Page</h1>
    </div>
  )
}

const Profile= () => {
  return(
    <div>
      <h1>Profile Page</h1>
    </div>
  )
}
const Settings= () => {
  return(
    <div>
      <h1>Settings Page</h1>
    </div>
  )
}
const SayUser= () => {

const params = useParams();

  return(
    <div>
      <h1>Your Name is {params.userId}</h1>
    </div>
  )
}
const PostPage= () => {

  
  const params = useParams();
  const [data,setData]  = useState(null);
  console.log(params);

  useEffect (() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then(data => data.json())
    .then(data => setData(data));
  },[])


  console.log(data);
  if(data === null) return <p>Loading...</p>
  
  return(
    <div>
      <h1>Here is the post</h1>
      <p>{data.title}</p>
      <p>{data.body}</p>


    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyComponent/>    */}
    {/* <CounterProvider> */}
    {/* <CartProvider> */}

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/post/:postId" element={<PostPage/>} />
      

      {/* Nested Routes */}
      <Route path="account">
      <Route path="profile" element={<Profile/>}/>
      <Route path="settings" element={<Settings/>}/>
      </Route>


    {/* Dynamic routes user : in it */}
    {/* In this case :userId is Dynamic value */}
    <Route path="/user/:userId" element={<SayUser/>}/>
      
    </Routes>

    {/* <App/> */}
    </BrowserRouter>


    {/* </CartProvider> */}

    {/* </CounterProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
