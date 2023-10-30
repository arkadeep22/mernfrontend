import React, { useEffect } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,SignupPage,ActivationPage,HomePage,ProductsPage,BestSellingPage,  EventsPage,FAQPage,ProductDetailsPage,ProfilePage} from "./Routes.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { server } from "./server";
import { loadSeller, loadUser } from "./redux/actions/user";
import Store from "./redux/store";
import { useSelector } from "react-redux";




const App = () => {
  const {  loading } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
   
  }, []);








  return (
<>
{
  loading?(
    null
  ):(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/product/:name" element={<ProductDetailsPage/>} />

    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path="/activation/:activation_token" element={<ActivationPage/>} />
    
    <Route path="/products" element={<ProductsPage/>} />
    <Route path="/best-selling" element={<BestSellingPage/>} />
    <Route path="/events" element={<EventsPage />} />
    <Route path="/faq" element={<FAQPage />} />



    <Route path="/profile" element={<ProfilePage />} />
  
    </Routes>
    

    
{/* using toastify */}
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
{/* using toastify */}




    
    
    </BrowserRouter>

  )
}
</>



  )
}

export default App
