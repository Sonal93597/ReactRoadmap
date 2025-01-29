// import { useRoutes } from "react-router-dom";
// import { useState, useNavigate } from "react";

// import { Home } from "./App";
// import Gallery from "./Content";
// import Posts from "./Posts";
// import PostList from "./PostList";
// import Post from "./Post";
// import Login from "./Login";
// import State from "./State";
// import { Link } from "react-router-dom";
//export default function Routes() {
    // const [user, setUser] = useState({});
    // const navigate = useNavigate();
 
    // const element = useRoutes([
    //     {path: '/', element: <Home/>},
    //     {path: '/content', element: <Gallery text={{title: 'Sonal'}}/>},
    //     {path: '/posts', element: <Posts/>,
    //          children: [
    //         {index: true, element: <PostList/>},
    //         {path: ':slug', element: <Post/>}
    //     ]},
    //     {path: '/login', element:<Login onLogin={setUser} />},
    //     {path: '/stats', element: <State user={user}/>}
    // ]);
    // function logOut() {
    //     setUser(null);
    //     navigate('/');
    // }
    // <>
    // <nav style={{padding: 10}}>
    //     <Link to='/' style={{padding: 5}} >Home</Link>
    //     <Link to='/content' style={{padding: 5}}>Content</Link>
    //     <Link to='/posts' style={{padding: 5}}>Posts</Link>
    //     <span> | </span>
    //     {user && <Link to='/stats' style={{padding: 5}} >Stats</Link>}
    //     {!user && <Link to='/login' style={{padding: 5}} >Login</Link>}
    //     { user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>Logout</span>}
    //     </nav>
    //     {element}
    // </>
   
//}