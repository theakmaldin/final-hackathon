import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { product, readProduct, getProduct } = useContext(productContext);

  useEffect(() => {
    readProduct();
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px">
        {product
          ? product.map(item => (
              <Grid item={true} xs={3.5} mb={7} key={item.id}>
                <ProductCard obj={item} />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

export default ProductsList;
