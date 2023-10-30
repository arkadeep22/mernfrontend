import React from 'react'
import Ticker from 'react-ticker'

const Banner = () => {
  return (
    <Ticker>
        {({ index }) => (
            <>
                <h1>BAG + SAREE + JEWELLERY = RS.200/- INSTANT DISCOUNT. (BUY 3 PRODUCTS & GET RS.200/- INSTANT DISCOUNT) </h1>
                <img src="www.my-image-source.com/" alt=""/>
            </>
        )}
    </Ticker>
)

  
}

export default Banner