import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductDetailsCard2 from "../ProductDetailsCard2/ProductDetailsCard2.jsx";
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineStar,
  } from "react-icons/ai";

const ProductCard2 = ({bestrated}) => {

    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);

const d=bestrated.name;
const product_name=d.replace(/\s+/g,"-");

  return (
    <>


    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
    <div className="flex justify-end"></div>



  <Link to={`/product/${product_name}`}>
          <img
            src={`${bestrated.image_Url[0].url}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />


    </Link>


<Link to="/">
<h5 className={`${styles.shop_name}`}>{bestrated.shop.name}</h5>
</Link>



<Link to={`/product/${product_name}`}>
    <h4 className="pb-3 font-[500]">
    {bestrated.name.length > 40 ? bestrated.name.slice(0, 40) + "..." : bestrated.name}  
    </h4>



<div className="flex">
<  AiFillStar className="mr-2 cursor-pointer"  color="#F6BA00" size={20}/>
<  AiFillStar className="mr-2 cursor-pointer"   color="#F6BA00" size={20}/>

<  AiFillStar className="mr-2 cursor-pointer"  color="#F6BA00"  size={20}/>

<  AiFillStar className="mr-2 cursor-pointer"  color="#F6BA00" size={20}/>

<  AiOutlineStar className="mr-2 cursor-pointer"   color="#F6BA00" size={20}/>

 </div>
 

 <div className="py-2 flex items-center justify-between">
 <div className="flex">

<h5  className={`${styles.productDiscountPrice}`}>
{bestrated.price===0 ? "Rs: " + bestrated.price :  "Rs: "+ bestrated. discount_price}
</h5>


<h4 className={`${styles.price}`}>
 {bestrated.price ?  " RS:"+ bestrated.price  : null}
</h4>


 </div>

 <span className="font-[400] text-[17px] text-[#68d284]">
{bestrated.total_sell} sold
</span>




 </div>
 </Link>


{/* side options */}

<div>
{ click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (


            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}              
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}

            <AiOutlineEye
              size={22}
              className="cursor-pointer absolute right-2 top-14"              
              onClick={() => setOpen(!open)}
              color="#333"
              title="Quick view"
            />
 <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            // onClick={() => setOpen(!open)}
            color="#444"
            title="Add to cart"
          />

              {/* if open is true */}

           {
              open? (

               <ProductDetailsCard2   setOpen={setOpen}  bestrated={bestrated} />


              ):null
              }

          
        




</div>









</div>




    </>
  );
};

export default ProductCard2
