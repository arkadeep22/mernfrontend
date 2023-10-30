import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const navigate = useNavigate();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=5054f5rgedfvdfv");
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%] `}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              {/* images left side */}
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />

                <div className=" w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={`${data?.image_Url[0]?.url}`}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>

                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={`${data?.image_Url[1]?.url}`}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              {/* images left side */}

              {/* right side */}

              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    Rs:{data.discount_price}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? "Rs:" + data.price : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[8.8px]">
                      {count}
                    </span>

                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>

                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>



                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>

                <div className="flex items-center pt-8">
 
                <Link to={`/shop/preview/${data.shop.name}`}>
                    <img
                      src={`${data.shop.shop_avatar.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link>

                  <div className="pr-8">
                    <Link to={`/shop/preview/${data.shop.name}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                    </Link>

                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>

                    </div>
                    <div
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>

              </div>

              {/* right side */}
            </div>
          </div>



{/* product details review etc */}

<ProductDetailsInfo  data={data}/>
<br />
<br />



{/* product details review etc */}



        </div>
      ) : null}
    </div>
  );
};


const ProductDetailsInfo=({data})=>{
  const [active, setActive] = useState(1);

return(
  <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded ">
  <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
        <h5 className={ "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]" }
            onClick={() => setActive(1)}>
                  Product Details
         
          </h5>

       {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}


        </div>
          <div className="relative">
        <h5 className={ "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]" }
            onClick={() => setActive(2)}>
                  Product Reviews
         
          </h5>

       {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}


        </div>
          <div className="relative">
        <h5 className={ "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]" }
            onClick={() => setActive(3)}>
             Seller Information
         
          </h5>

       {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}


        </div>


        
        </div>

{
  active===1?(
    <>
    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni blanditiis dignissimos ipsum. Perspiciatis quos alias sit praesentium rerum, adipisci neque accusamus aspernatur quo, placeat minus provident totam, recusandae similique amet. Id nobis iste molestiae, blanditiis aliquid provident ea hic vero reprehenderit? Id, vitae alias? Voluptatum a nobis totam, corporis quisquam accusamus minima perspiciatis voluptatibus nam sit veritatis alias voluptates quis eligendi voluptatem beatae, saepe iusto. Quisquam nam, dignissimos sapiente fugiat nihil expedita placeat, explicabo facere est perferendis officiis beatae, inventore reprehenderit vitae. Laboriosam repudiandae excepturi libero cum voluptatem praesentium sunt nihil veniam est quaerat.
    </p>
    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni blanditiis dignissimos ipsum. Perspiciatis quos alias sit praesentium rerum, adipisci neque accusamus aspernatur quo, placeat minus provident totam, recusandae similique amet. Id nobis iste molestiae, blanditiis aliquid provident ea hic vero reprehenderit? Id, vitae alias? Voluptatum a nobis totam, corporis quisquam accusamus minima perspiciatis voluptatibus nam sit veritatis alias voluptates quis eligendi voluptatem beatae, saepe iusto. Quisquam nam, dignissimos sapiente fugiat nihil expedita placeat, explicabo facere est perferendis officiis beatae, inventore reprehenderit vitae. Laboriosam repudiandae excepturi libero cum voluptatem praesentium sunt nihil veniam est quaerat.
    </p>
     <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni blanditiis dignissimos ipsum. Perspiciatis quos alias sit praesentium rerum, adipisci neque accusamus aspernatur quo, placeat minus provident totam, recusandae similique amet. Id nobis iste molestiae, blanditiis aliquid provident ea hic vero reprehenderit? Id, vitae alias? Voluptatum a nobis totam, corporis quisquam accusamus minima perspiciatis voluptatibus nam sit veritatis alias voluptates quis eligendi voluptatem beatae, saepe iusto. Quisquam nam, dignissimos sapiente fugiat nihil expedita placeat, explicabo facere est perferendis officiis beatae, inventore reprehenderit vitae. Laboriosam repudiandae excepturi libero cum voluptatem praesentium sunt nihil veniam est quaerat.
    </p>

    </>
  ):null
  
}

{
active===2?(
<div  className="w-full min-h-[40vh]  justify-center flex items-center">
<p>No reviews yet!</p>
</div>
):null
}
  

{
  active===3&&(
<div className="w-full block 800px:flex p-5">
<div className="w-full 800px:w-[50%]">
<div className="flex items-center">

<img src={`${data.shop.shop_avatar.url}`}
className="w-[50px] h-[50px] rounded-full"
 alt="" />

<div className="pl-3">
<h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
<h5 className="pb-2 text-[15px]">
   ({data.shop.ratings}) Ratings
</h5>

</div>
</div>
<p className="pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos eius numquam voluptatum culpa, cupiditate impedit, in facere pariatur delectus alias laboriosam consectetur!</p>
</div>
<div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">

<div className="text-left">
<h5 className="font-[600]">
  Joined on:{" "}
<span className="font-[500]">
10 November, 2023
</span>
</h5>

<h5 className="font-[600] pt-3">
  Total Products:{" "}
<span className="font-[500]">
1,233
</span>
</h5>
<h5 className="font-[600] pt-3">
  Total Reviews:{" "}
<span className="font-[500]">
589
</span>
</h5>

<Link to="/">
<div className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}>
<h4 className="text-white">Visit Shop</h4>
</div>
</Link>

</div>

</div>
</div>
  )
}



  </div>
)
}

export default ProductDetails;
