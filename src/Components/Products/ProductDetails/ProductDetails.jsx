import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Thumbs } from "swiper";
import { useAuth } from "../../../Context/AuthContextProvider";
import { basketContext } from "../../../Context/BasketContexProvider";
import { textAlign } from "@mui/system";
import Comments from "../../Comments/Comments";
import { commentContext } from "../../../Context/CommentContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const navigate = useNavigate();
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { addProductToBasket } = useContext(basketContext);
  const { comments, getComments, readComment } = useContext(commentContext);
  const { id } = useParams();
  const [comment, setComment] = useState("");

  useEffect(() => {
    readOneProduct(id);
    getComments();
  }, [id]);

  const {
    user: { email },
  } = useAuth();

  let newComment = {
    comment: comment,
    productId: id,
  };

  useEffect(() => {
    readComment();
  }, []);
  // const sortComments = id => {
  const filteredComments = comments.filter(item => item.productId === id);
  console.log(filteredComments);
  // };

  return (
    <div>
      {productDetails ? (
        <Container className="details-body">
          <Grid display="flex" color="black">
            <Grid item xs={6}>
              <Grid>
                <div>
                  <img
                    style={{ width: "80%", marginTop: "5%" }}
                    src={productDetails.img1}
                    alt={productDetails.title}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid
              style={{
                marginTop: "5%",
                textAlign: "center",
                border: "3px solid black",
                marginBottom: "15%",
              }}>
              <Typography variant="h6">
                Категория: {productDetails.category}
                <hr />
              </Typography>
              <Typography variant="h6">
                Название: {productDetails.title}
                <hr />
              </Typography>
              <Typography className="priceEuro" variant="h5">
                Цена: $ {productDetails.price}
                <hr />
              </Typography>
              <Grid>
                <button
                  className="ProductDetail-btn"
                  onClick={() => addProductToBasket(productDetails)}>
                  <Grid
                    style={{
                      fontFamily: "Roboto,Arial,sans-serif",
                      fontSize: "20px",
                    }}>
                    Add to basket
                  </Grid>
                </button>
              </Grid>
              <Typography
                sx={{ marginTop: "10px", border: "1px solid black" }}
                style={{}}>
                Описание: {productDetails.description}
              </Typography>
              {/* <Typography
                sx={{ marginTop: "10px", border: "1px solid black" }}
                style={{}}
                onClick={sortComments(id)}>
                Comments: {comments}
              </Typography> */}

              <Box>
                {email === "azret@mail.ru" ? (
                  <button
                    className="ProductDetail-btn"
                    onClick={() => deleteProduct(productDetails.id)}>
                    Delete
                  </button>
                ) : null}
                {email === "azret@mail.ru" ? (
                  <button
                    className="ProductDetail-btn"
                    onClick={() => navigate(`/edit/${productDetails.id}`)}>
                    Edit
                  </button>
                ) : null}
              </Box>
            </Grid>
            {/* <Grid>
              {comments()
                ? comments().map(item => (
                    <Grid item={true} mt={15} mb={25} key={item.id}>
                      <ProductDetails obj={item} />
                    </Grid>
                  ))
                : null}
            </Grid> */}
          </Grid>

          <input
            type="text"
            value={comment}
            placeholder="Введите сообщение..."
            onChange={e => setComment(e.target.value)}
          />
        </Container>
      ) : null}
    </div>
  );
};

export default ProductDetails;
