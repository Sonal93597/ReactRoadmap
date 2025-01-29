import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({onLogin}) {
    const [creds, setCreds] = useState({});
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    function handleLogin(event) {
        event.preventDefault();
    if (creds.username === 'admin' && creds.password === '123') {
        onLogin && onLogin({username: creds.username});
        navigate('/stats')
    }
    }

    return (
        <form style={{padding: 20}} onSubmit={handleLogin}>
           <label htmlFor="email">Username:</label>
            <input type="text" id="email" ref={emailRef}
            onChange={(e)=> setCreds({...creds, username: e.target.value})}/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordRef}
            onChange={(e)=> setCreds({...creds, password: e.target.value})}/><br/>
            <button type='submit'>Login</button>
        </form>
    )
}

