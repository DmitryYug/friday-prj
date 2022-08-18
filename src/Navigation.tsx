import React from 'react';
import {Route, Routes } from 'react-router-dom';
import App from "./App";
import RegisterPage from "./components/pages/register-page";
import ProfilePage from "./components/pages/profile-page";
import ForgotPasswordPage from "./components/pages/forgot-password-page";
import NewPasswordPage from "./components/pages/new-password-page";
import LoginPage from "./components/pages/login-page";
import NotFoundPage from "./components/pages/not-fount-page";
import TestPage from "./components/pages/test-page";

const Navigation = () => {
    return (
        <Routes>
            <Route path={'/friday-prj'} element={<App/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'/forgotPassword'} element={<ForgotPasswordPage/>}/>
            <Route path={'/newPassword'} element={<NewPasswordPage/>}/>
            <Route path={'/test'} element={<TestPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default Navigation;