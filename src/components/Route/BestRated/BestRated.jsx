import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import { productData } from "../../../static/data";
import ProductCard2 from "../ProductCard2/ProductCard2.jsx";

const BestRated = () => {
//   const [data, setData] = useState([]);
  const[bestrated,setbestrated]=useState([]);

  useEffect(() => {
  

    const d=productData&&productData.sort((a,b)=>b.rating-a.rating)
    const firstFives = d.slice(0, 5);
    setbestrated(firstFives);
  }, []);

  return (
    <div>
     

      {/* //best rated */}

      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Popular Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
           {
            bestrated && bestrated.length !== 0 &&(
              <>
               {bestrated && bestrated.map((i, index) => <ProductCard2 bestrated={i} key={index} />)}
              </>
            )
           }






        </div>
      </div> 
    </div>
  );
};

export default BestRated;

// // {
//   bestrated && bestrated.length !== 0 &&(
//     <>
//      {bestrated && bestrated.map((i, index) => <ProductCard data={i} key={index} />)}
//     </>
//   )
//  }//
