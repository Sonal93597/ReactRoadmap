import './App.css';
import { useState, } from 'react';
import { Router, Routes, Route,Link, useNavigate } from 'react-router-dom';
import Gallery from './Content';
import Posts from './Posts';
import Post from './Post';
import PostList from './PostList';
import Login from './Login';
import State from './State';
//import AppLayout from './AppLayout';
// const BlogPosts = {
//   'first-blog-post': {
//     title: 'First Blog Post',
//     description: 'Lorem ipsum dolor sit amet, consectetur adip.'
//   },
//   'second-blog-post': {
//     title: 'Second Blog Post',
//     description: 'Hello React Router v6'
//   }
// };

export function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
export function App() {
 // const msg = 'Welcome to React!'

     const [user, setUser] = useState();
  //  const navigate = useNavigate();

    function logout() {
        setUser(null);
   //    navigate("/");
    }

  return (
    <Gallery></Gallery>
  );
}
export default App;
