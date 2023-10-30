import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import { productData } from "../../../static/data";
import ProductCard2 from "../ProductCard2/ProductCard2.jsx";

const BestRated = () => {
  const [bestrated, setbestrated] = useState([]);

  useEffect(() => {
    // Sort the productData array by createdAt in ascending order
    const sortedProducts = productData.slice().sort((a, b) => {
      const dateA = new Date(b.createdAt);
      const dateB = new Date(a.createdAt);
      return dateA - dateB;
    });

    // Get the first five products after sorting
    const firstFives = sortedProducts.slice(0, 10);

    setbestrated(firstFives);
  }, []);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Recent Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {bestrated && bestrated.length !== 0 && (
            <>
              {bestrated.map((product, index) => (
                <ProductCard2 bestrated={product} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestRated;
