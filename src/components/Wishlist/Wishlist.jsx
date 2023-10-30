import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/styles";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({setOpenWishlist}) => {


const cartData=[
    {
    name:"I phone 14 pro max 256 gb ssd and 8gb ram",
    description:"lorem24fksibjbvrishhbcjbcshbfk rrfhhbf",
    price:  255,

    },
    {
        name:"I phone 14 pro max 256 gb ssd and 8gb ram",
        description:"lorem24fksibjbvrishhbcjbcshbfk rrfhhbf",
        price:  255,
    
        },
        {
            name:"I phone 14 pro max 256 gb ssd and 8gb ram",
            description:"lorem24fksibjbvrishhbcjbcshbfk rrfhhbf",
            price:  255,
        
            },
     
            {
                name:"I phone 14 pro max 256 gb ssd and 8gb ram",
                description:"lorem24fksibjbvrishhbcjbcshbfk rrfhhbf",
                price:  255,
            
                },


]






  return (
    <div   className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
    <div   className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">

<div>

<div className="flex w-full justify-end pt-5 pr-5 ">

               <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
                />
</div>






{/* items length */}
<div className={`${styles.noramlFlex} p-4`}>
<AiOutlineHeart size={25} />
<h5 className="pl-2 text-[20px] font-[500]">
     {cartData && cartData.length} items
</h5>


</div>

  {/* cart Single Items */}
  <br />
  <div className="w-full border-t">
                {cartData &&
                  cartData.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                    //   quantityChangeHandler={quantityChangeHandler}
                    //   removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>

          
</div>


    </div>
</div>
  )
}


const CartSingle=({data})=>{

    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;

    return(
<div className="border-b p-4">
<div className="w-full flex items-center">
<RxCross1 className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2"/>
<img src="https://www.mydesignation.com/wp-content/uploads/2020/02/golden-yellow-plain-tshirt-mydesignation.jpg"  alt="" className="w-[80px] h-min ml-2 mr-2 rounded-[5px]"/>





<div className="pl-[5px]">
  <h1>{data.name}</h1>
 
   <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            Rs:{totalPrice}
          </h4>
</div>
<div>
<BsCartPlus size={20} className="cursor-pointer" tile="Add to cart" />
</div>




</div>
</div>

    )

}


export default Wishlist
