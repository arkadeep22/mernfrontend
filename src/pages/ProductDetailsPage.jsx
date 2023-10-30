import React, { useState } from "react";
import Banner from "../components/Layout/Banner";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx"


const ProductDetailsPage = () => {
const{name}=useParams();
const [data,setData]=useState(null);
const productName=name.replace(/-/g," ");




useEffect(()=>{
const data=productData.find((i)=>i.name===productName);
setData(data);

},[])





  return (
    <div>
      <Banner />
      <Header />
<ProductDetails data={data}/>

{
data&&<SuggestedProduct data={data} />
}

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
