import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ obj }) => {
  let navigate = useNavigate();
  return (
    <div>
      <div class="cards">
        <div class="cards__item">
          <div class="card">
            <img src={obj.img1} alt={obj.title} class="card__image" />
            <div class="card__content">
              <div class="card__category">{obj.category}</div>
              <div class="card__title">{obj.title}</div>
              <p class="card__text">{obj.description}</p>

              <Link to={`/details/${obj.id}`}>
                <button class="btn btn--block card__btn">Button</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//     <Card sx={{ maxWidth: 347, marginLeft: "20%" }}>
//       <Link to={`/details/${obj.id}`}>
//         <CardMedia
//           className="cardMedia"
//           component="img"
//           height="auto"
//           image={obj.img1}
//           alt={obj.title}
//         />
//       </Link>
//       <CardHeader
//         sx={{ paddingBottom: "0", paddingLeft: "0", paddingRight: "0" }}
//         className="cardHeader"
//         title={obj.category}
//         subheader={obj.title}></CardHeader>

//       <CardActions
//         disableSpacing
//         sx={{ display: "flex", justifyContent: "space-between" }}>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// };

export default ProductCard;
