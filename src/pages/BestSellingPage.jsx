import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import Banner from '../components/Layout/Banner';
import Footer from "../components/Layout/Footer";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const categories = [
  "All",
  "Computers and Laptops",
  "Cosmetics and Body Care",
  "Accessories",
  "Cloths",
  "Shoes",
  "Gifts",
  "Pet Care",
  "Mobile and Tablets",
  "Music and Gaming",
  "Others",
];

const priceRanges = [
  "All Prices",
  "Above 100",
  "Above 1000",
  "Above 10000",
  // Add more price range options as needed
];

const BestSellingPage = () => {
  const [data, setData] = useState(null); // Initialize as null
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices"); // Default price range
  const [sortBy, setSortBy] = useState("popularity"); // Default sorting by popularity

  useEffect(() => {
    const productDatas = productData ? [...productData] : [];

    const customSort = (a, b) => {
      if (sortBy === "priceLowToHigh") {
        return a.discount_price - b.discount_price;
      } else if (sortBy === "priceHighToLow") {
        return b.discount_price - a.discount_price;
      } else if (sortBy === "bestRated") {
        return b.ratings - a.ratings;
      } else if (sortBy === "popularity") {
        return b.total_sell - a.total_sell;
      }
    };

    const filteredData = productDatas
      .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
      .filter((item) => {
        if (selectedPriceRange === "All Prices") {
          return true; // Include all products
        } else if (selectedPriceRange === "Above 100") {
          return item.discount_price > 100;
        } else if (selectedPriceRange === "Above 1000") {
          return item.discount_price > 1000;
        } else if (selectedPriceRange === "Above 10000") {
          return item.discount_price > 10000;
        }
        // Add more price range filters as needed
      })
      .sort(customSort);

    setData(filteredData);
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleClearFilters = () => {
    setSelectedCategory("All");
    setSelectedPriceRange("All Prices");
    setSortBy("popularity");
  };

  return (
    <div>
      <Banner />
      <Header activeHeading={2} />
      <div className="p-4">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <label htmlFor="sortSelect" className="mr-2">
              Sort by:
            </label>
            <select
              id="sortSelect"
              value={sortBy}
              onChange={handleSortChange}
              className="p-2 rounded border border-gray-300"
            >
              <option value="popularity">Popularity</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="bestRated">Best Rated</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="categorySelect" className="mr-2">
              Filter by Category:
            </label>
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="p-2 rounded border border-gray-300"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="priceRangeSelect" className="mr-2">
              Filter by Price:
            </label>
            <select
              id="priceRangeSelect"
              value={selectedPriceRange}
              onChange={handlePriceRangeChange}
              className="p-2 rounded border border-gray-300"
            >
              {priceRanges.map((priceRange) => (
                <option key={priceRange} value={priceRange}>
                  {priceRange}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleClearFilters} className="ml-4 px-4 py-2 rounded bg-red-500 text-white">
            Clear Filters
          </button>
        </div>
        {data !== null && data.length > 0 ? ( // Check if data is not null and has items
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data.map((item, index) => (
              <div key={index} className="border rounded border-gray-300 p-4">
                <ProductCard data={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full min-h-[40vh] flex justify-center items-center">
          <p style={{ fontWeight: 500, color: 'black' }}>No Products Found!</p>
        </div>
        
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BestSellingPage;
