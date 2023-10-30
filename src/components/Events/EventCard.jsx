import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg   ${
      active ? "unset" : "mb-12"
    }  lg:flex p-2`}>
      
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.landing-big_2x.jpg" alt="" />
      </div>

      <div className="w-full lg:[w-50%] flex flex-col justify-center">
      <h2 className={`${styles.productTitle}`}>IPhone 13 Pro Sierra Blue 256gb ssd</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tempora laboriosam obcaecati odio dignissimos sequi minus vitae dolore quae aspernatur, qui impedit assumenda provident!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tempora laboriosam obcaecati odio dignissimos sequi minus vitae dolore quae aspernatur, qui impedit assumenda provident!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tempora laboriosam obcaecati odio dignissimos sequi minus vitae dolore quae aspernatur, qui impedit assumenda provident!
    </p> 
      
    <div className="flex py-2 justify-between">
     <div className="flex">
   
     <h5 className="font-[500] text-[20px] text-[#d55b45] pr-3 line-through">
           RS:1,50000
     </h5>
     <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
             Rs:1,00000
     </h5>
     </div>

     <span className="pr-2  font-[400] text-[19px] text-[#44a55e]">
        2500 sold
     </span>
     </div>


     <CountDown/>

  
    
      </div>

    </div>
  )
}

export default EventCard
