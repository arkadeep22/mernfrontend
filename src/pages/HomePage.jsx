import React from 'react'
import Header from "../components/Layout/Header.jsx"
import Hero   from   "../components/Route/Hero/Hero.jsx"
import Categories from  "../components/Route/Categories/Categories.jsx"
import BestDeals  from    "../components/Route/BestDeals/BestDeals.jsx"
import BestRated  from    "../components/Route/BestRated/BestRated.jsx"
import Banner from "../components/Layout/Banner.jsx"
import FeaturedProduct   from  "../components/Route/FeaturedProduct/FeaturedProduct.jsx"
import Events from  "../components/Events/Events.jsx"
import Sponsored  from "../components/Route/Sponsored.jsx"
import Footer     from   "../components/Layout/Footer.jsx"
import RecentProduct   from  "../components/Route/RecentProduct/RecentProduct.jsx"



const HomePage = () => {
  return (
    <div>
  <Banner/>
      <Header  activeHeading={1}  />
      

       <Hero/>
       
       <Categories/>
      <BestDeals/>
      <Events/>
      <BestRated/>
      <FeaturedProduct/>
      <RecentProduct/>
      <Sponsored/>
      <Footer/>



    </div>
  )
}

export default HomePage
