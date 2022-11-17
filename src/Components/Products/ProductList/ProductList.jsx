import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./ProductList.css";

const ProductsList = () => {
  const {
    product,
    readProduct,
    getProduct,
    filProducts,
    searchProducts,
    getSearch,
  } = useContext(productContext);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [paramsSearch, setParamsSearch] = useSearchParams();
  // const {} = useContext(productContext);
  const [searchValue, setSearchValue] = useState("");
  console.log(category);
  const itemLimit = 3;

  const count = Math.ceil(product.length / itemLimit);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemLimit;
    const end = begin + itemLimit;
    return product.slice(begin, end);
  }

  // useEffect(() => {
  //   if (category === "all") {
  //     setParamsSearch({
  //       q: paramsSearch.get("q") || "",
  //     });
  //   } else {
  //     setParamsSearch({
  //       category: category,
  //     });
  //   }
  // }, [category, paramsSearch]);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    readProduct();
  }, [paramsSearch]);

  useEffect(() => {
    if (category == "all") {
      getProduct();
    } else {
      filProducts(category);
    }
  }, [category]);

  console.log(product);

  function handleValue() {
    getSearch(searchValue);
    setSearchValue("");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px",
      }}>
      <Grid style={{ display: "flex" }}>
        {/* Search */}
        <div
          style={{
            width: "100%",
            height: "110px",
          }}>
          <div className="container searchContainer">
            <input
              className="searchWindow"
              placeholder="Введите продукт..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            <SearchIcon
              className="searchIconBtn"
              onClick={searchValue ? handleValue : null}
            />
          </div>
        </div>

        {searchProducts ? (
          <div className="list">
            {searchProducts.map(item => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        ) : null}

        {/* Filter */}

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ display: "flex", flexDirection: "unset" }}>
          <FormControlLabel value="Кружка" control={<Radio />} label="Кружка" />
          <FormControlLabel
            value="Футболка"
            control={<Radio />}
            label="Футболка"
          />
          <FormControlLabel value="Маска" control={<Radio />} label="Маска" />
          <FormControlLabel value="all" control={<Radio />} label="all" />
        </RadioGroup>
      </Grid>

      {/* Pagination */}
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ width: "90%" }}>
        {currentData()
          ? currentData().map(item => (
              <Grid item={true} mt={15} mb={25} key={item.id}>
                <ProductCard obj={item} />
              </Grid>
            ))
          : null}
      </Grid>

      <Pagination
        style={{ paddingBottom: "20px" }}
        color="primary"
        count={count}
        page={page}
        onChange={handlePage}
        variant="outlined"
      />
    </div>
  );
};

export default ProductsList;
