import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";





const Store = configureStore({
    reducer: {
      user: userReducer,
    //   seller: sellerReducer,
    //   products: productReducer,
    //   events: eventReducer,
    //   cart: cartReducer,
    //   wishlist: wishlistReducer,
    //   order: orderReducer,
    },
  });
  
  export default Store;

