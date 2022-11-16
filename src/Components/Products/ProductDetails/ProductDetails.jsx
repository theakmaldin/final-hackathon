import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Thumbs } from "swiper";
// import { basketContext } from "../../../Context/BasketContexProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const navigate = useNavigate();
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  // const { addProductToBasket } = useContext(basketContext);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  return (
    <div>
      {/* <div class="container">
        <input className="input-details" type="checkbox" id="click" />
        <div id="out">
          <img
            src="https://cdn.shopify.com/s/files/1/0172/5036/products/Love-rose_720x.png?v=1663003846"
            alt="product"
            width="260"
          />
          <label for="click">Buy Now</label>
        </div>
        <div class="p1">
          <span>
            <p></p>
            <p id="dia"></p>
          </span>
          <span>
            <p>Description</p>
            <p>Subtotal</p>
          </span>
        </div>
        <div class="p2">
          <span id="name">
            <p>Love 20ml</p>
            <p>€10.00</p>
          </span>
          <span id="sp">
            <p>Bottled pondering</p>
            <p></p>
          </span>
          <span id="total">
            <p>Total</p>
            <h4>€10.00</h4>
          </span>
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
        <div class="p3">
          <div class="line3"></div>
          <div class="line4"></div>
          <img
            src="https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg"
            alt="Barscanner"
            width="280"
          />
        </div>
      </div> */}

      {productDetails ? (
        <Container className="details-body">
          <Grid display="flex" flexDirection="colom" container spacing={2}>
            <Grid item xs={6}>
              <Grid>
                <div>
                  <img
                    style={{ width: "80%", marginTop: "90px" }}
                    src={productDetails.img1}
                    alt={productDetails.title}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Typography
                style={{ paddingBottom: "15px", paddingLeft: "10px" }}
                variant="h6">
                {productDetails.title}{" "}
              </Typography>
              <Typography className="priceEuro" variant="h5">
                {productDetails.price}
              </Typography>
              <Grid>
                <Button
                  variant="contained"
                  style={{
                    textTransform: "capitalize",
                    borderRadius: "0",
                    width: "32%",
                    height: "43px",
                    background: "rgba(60, 55, 55, 0.8)",
                    opacity: " 0.5",
                  }}
                  sx={{ marginLeft: "20px", marginTop: "32px" }}>
                  {/* onClick={() => addProductToBasket(productDetails)} */}
                  <Grid
                    style={{
                      fontFamily: "Roboto,Arial,sans-serif",
                      fontSize: "20px",
                    }}>
                    Add to cart
                  </Grid>
                </Button>
              </Grid>
              <Typography sx={{ marginTop: "10px" }} style={{}}>
                <p className="infoLink">Product Info</p>
                {productDetails.description}
              </Typography>

              <Box>
                <button onClick={() => deleteProduct(productDetails.id)}>
                  Delete
                </button>
                <button onClick={() => navigate(`/edit/${productDetails.id}`)}>
                  Edit
                </button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </div>
  );
};

export default ProductDetails;
