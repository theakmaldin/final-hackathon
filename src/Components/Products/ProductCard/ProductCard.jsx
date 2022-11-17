import React from "react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ obj }) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="cards">
        <div className="cards__item">
          <div className="card">
            <img src={obj.img1} alt={obj.title} className="card__image" />
            <div className="card__content">
              <div className="card__category">{obj.category}</div>
              <div className="card__title">{obj.title}</div>
              <p className="card__text">{obj.description}</p>

              <Link to={`/details/${obj.id}`}>
                <button className="btn btn--block card__btn">Button</button>
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
