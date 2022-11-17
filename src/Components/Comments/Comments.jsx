import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContextProvider";
import { productContext } from "../../Context/ProductContextProvider";

import "./Comments.css";

const Comments = ({ id, productsDet }) => {
  let dataTime = Math.floor(Date.now() / 1000);
  const { addComments, getProductsDetails } = useContext(productContext);

  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  // const [newDataWithComment, setNewDataWithComment] = useState(productsDet);
  const [comment, setComment] = useState({
    name: email,
    commentText: "",
    time: dataTime,
  });

  function handleValues(e) {
    let newComment = {
      ...comment,
      commentText: e.target.value,
    };
    setComment(newComment);
  }

  function handleAddComment() {
    if (comment.commentText === "") {
      alert("комментарий пустой");
    } else {
      productsDet.comments.push(comment);
      addComments(id, productsDet);
      getProductsDetails(id);
      setComment({
        name: email,
        commentText: "",
        time: dataTime,
      });
    }
  }
  return (
    <div className=" container containerComments">
      <div className="commentsInput">
        <h3 style={{ margin: "0", opacity: "0.7" }}>
          Помогите нам стать лучше!
        </h3>
        <p>
          <textarea
            name="commentText"
            type="text"
            value={comment.commentText}
            onChange={handleValues}
            cols="45"
            row="10"
            maxLength="1000"></textarea>
        </p>
        {email ? (
          <button onClick={() => handleAddComment()}>Оставить отзыв</button>
        ) : (
          <>
            <p style={{ fontSize: "1.1rem", opacity: "0.5" }}>
              <em>Вы не можете оставить отзыв пока не зарегистрируетесь!</em>
            </p>
            <Link to="/auth">
              <button>Регистрация</button>
            </Link>
          </>
        )}
      </div>
      <div className="commentsRead">
        {productsDet.comment ? (
          productsDet.comment.map((item, index) => (
            <div key={index} className="commentUser">
              <div className="timeName">
                <p className="name">
                  <em>{item.name}:</em>
                </p>
              </div>
              <p className="commentText">{item.commentText}</p>
            </div>
          ))
        ) : (
          <div>На данный момент отзывовов нет...</div>
        )}
      </div>
    </div>
  );
};

export default Comments;
