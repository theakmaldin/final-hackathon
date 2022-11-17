import React, { useContext, useState } from "react";
import { useAuth } from "../../../Context/AuthContextProvider";
import { productContext } from "../../../Context/ProductContextProvider";
import Navbar from "../../Navbar/Navbar";
import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (
      !category.trim() ||
      !title.trim() ||
      !description.trim() ||
      !price ||
      !img.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let obj = {
      category,
      title,
      description,
      price: +price,
      img,
      comments: [],
    };
    addProduct(obj);
    setCategory("");
    setTitle("");
    setDescription("");
    setPrice(0);
    setImg("");
  }
  const {
    user: { email },
  } = useAuth();

  return (
    <>
      {<Navbar />}
      {email === "azret@mail.ru" ? (
        <div className="body-add">
          <form id="div-add" onSubmit={e => handleAdd(e)}>
            <h2 id="add-title">Добавление товара</h2>
            <input
              className="inp-addProduct"
              placeholder="Категория..."
              value={category}
              type="text"
              onChange={e => setCategory(e.target.value)}
            />
            <input
              className="inp-addProduct"
              placeholder="Название..."
              value={title}
              type="text"
              onChange={e => setTitle(e.target.value)}
            />
            <input
              className="inp-addProduct"
              placeholder="Описание..."
              value={description}
              type="text"
              onChange={e => setDescription(e.target.value)}
            />
            <input
              className="inp-addProduct"
              placeholder="Цена..."
              value={price}
              type="number"
              onChange={e => setPrice(e.target.value)}
            />
            <input
              className="inp-addProduct"
              placeholder="Фото..."
              value={img}
              type="text"
              onChange={e => setImg(e.target.value)}
            />
            <button className="btn-add" type="submit">
              Добавить
            </button>
          </form>
          <div className="container noAdmin">
            <h1></h1>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddProduct;
