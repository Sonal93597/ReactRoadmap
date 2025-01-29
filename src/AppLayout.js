import { useState } from "react";
import {
  Routes,
  Route,
  Link
   } from 'react-router-dom';
import Gallery from './Content';
import Posts from './Posts';
import Post from './Post';
import PostList from './PostList';
import Login from './Login';
import State from './State';
import Home from './App';
export function AppLayout() {
    // const [user, setUser] = useState();
    // const navigate = useNavigate();

    // function logout() {
    //     setUser(null);
    //    navigate("/");
    // }

    return(
      <>
   <nav style={{margin: 10}}>
        <Link to='/' style={{padding: 5}} >Home</Link>
        <Link to='/content' style={{padding: 5}}>Content</Link>
        <Link to='/posts' style={{padding: 5}}>Posts</Link>
        <span>|</span>
        {/* {user && <Link to='/state' style={{padding: 5}}>State</Link>}
        {!user && <Link to='/login' style={{padding: 5}}>Login</Link>}
        {user && <span onClick={logout}>Logout</span>} */}
        
      </nav>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/content' element={<Gallery text={{title: 'Sonal'}}/>}></Route>
        <Route path='/posts' element={<Posts/>}>
          <Route index element={<PostList/>}/>
          <Route path=':slug' element={<Post/>}/>
        </Route>

        {/* <Route path='/state' element={<State user={user}/>}></Route>
        <Route path='/login' element={<Login onLogin={setUser} />}></Route> */}
      </Routes> 
      </>
    );
}

