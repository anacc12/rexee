import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import UserSurveys from "./pages/UserSurveys";
import UserVouchers from "./pages/UserVouchers";
import UserItems from "./pages/UserItems";

import ForgotPassword from "./pages/ForgotPassword";
import ScrollToTop from "./components/ScrollToTop"; 
import ResetPasswordCode from "./pages/ResetPasswordCode"; 
import ResetPassword from "./pages/ResetPassword"; 

import NotFound from "./pages/NotFound"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ScrollToTop /> 
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/blog" element={<Blog />} />
      {/* <Route path={`/blog/${slug}`} element={<Article />} /> */}
      
      <Route path="/blog/:slug" element={<Article />} />
      <Route path="/dashboard" element={<UserDashboard />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password-code" element={<ResetPasswordCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/profile" element={<UserProfile />} />
      <Route path="/surveys" element={<UserSurveys />} />
      <Route path="/items" element={<UserItems />} />
      <Route path="/vouchers" element={<UserVouchers />} />

      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();