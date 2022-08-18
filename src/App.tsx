import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Navigation from "./Navigation";

function App() {
    return (
        <div className="App">
            <h1>app</h1>
            <ul>
                <li>
                    <Link to={'/login'}>LoginPage</Link>
                </li>
                <li>
                    <Link to={'/newPassword'}>NewPasswordPage</Link>
                </li>
                <li>
                    <Link to={'/profile'}>ProfilePage</Link>
                </li>
                <li>
                    <Link to={'/register'}>RegisterPage</Link>
                </li>
                <li>
                    <Link to={'/test'}>TestPage</Link>
                </li>
                <li>
                    <Link to={'/forgotPassword'}>ForgotPasswordPage</Link>
                </li>
            </ul>
            <Navigation/>
        </div>
    );
}

export default App;
