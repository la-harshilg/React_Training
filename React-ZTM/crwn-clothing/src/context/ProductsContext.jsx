import { createContext, useState, useEffect } from "react";

import { getCategoriesandDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products] = useState([]);
  const value = { products };
  // useEffect(() => {
  //   addCollectionandDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesandDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
