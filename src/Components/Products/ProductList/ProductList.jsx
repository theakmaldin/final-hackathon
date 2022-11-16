import {
  Autocomplete,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { product, readProduct, getProduct, filProducts } =
    useContext(productContext);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [paramsSearch, setParamsSearch] = useSearchParams();

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

  useEffect(() => {
    if (category === "all") {
      setParamsSearch({
        q: paramsSearch.get("q") || "",
      });
    } else {
      setParamsSearch({
        category: category,
      });
    }
  }, [category, paramsSearch]);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    readProduct();
  }, [paramsSearch]);

  useEffect(() => {
    filProducts(category);
  }, [category]);

  console.log(product);

  // console.log(product);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}
        style={{
          paddingTop: "10%",
          display: "flex",
          flexDirection: "row",
        }}>
        <FormControlLabel value="girl" control={<Radio />} label="girl" />
        <FormControlLabel value="boy" control={<Radio />} label="boy" />
        <FormControlLabel value="all" control={<Radio />} label="all" />
      </RadioGroup>

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
