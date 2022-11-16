import React, { useContext, useState } from "react";
import "./Filter.css";
import { productContext } from "../../Context/ProductContextProvider";
import ProductCard from "../Products/ProductCard/ProductCard";

const Filter = () => {
  const { filterProduct } = useContext(productContext);
  const [pageNumber, setPageNumber] = useState(0);

  const limit = 3;
  const pagesVisited = pageNumber * limit;

  const pageCount = Math.ceil(filterProduct.length / limit);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProduct = filterProduct
    .slice(pagesVisited, pagesVisited + limit)
    .map(item => <ProductCard item={item} key={item.id} />);

  return <div className="filterProduct"></div>;
};
export default Filter;
