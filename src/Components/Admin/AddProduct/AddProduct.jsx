import React, { useContext, useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (
      !category.trim() ||
      !title.trim() ||
      !model.trim() ||
      !description.trim() ||
      !color.trim() ||
      !price ||
      !img1.trim() ||
      !img2.trim() ||
      !img3.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let obj = {
      category,
      title,
      model,
      description,
      color,
      price: +price,
      img1,
      img2,
      img3,
    };
    addProduct(obj);
    setCategory("");
    setTitle("");
    setModel("");
    setDescription("");
    setColor("");
    setPrice(0);
    setImg1("");
    setImg2("");
    setImg3("");
  }

  return (
    <>
      <h2 id="add-title">Добавление товара</h2>
      <form id="div-add" onSubmit={e => handleAdd(e)}>
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
          placeholder="Модель..."
          value={model}
          type="text"
          onChange={e => setModel(e.target.value)}
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
          placeholder="Цвет..."
          value={color}
          type="text"
          onChange={e => setColor(e.target.value)}
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
          placeholder="Фото-1..."
          value={img1}
          type="text"
          onChange={e => setImg1(e.target.value)}
        />
        <input
          className="inp-addProduct"
          placeholder="Фото-2..."
          value={img2}
          type="text"
          onChange={e => setImg2(e.target.value)}
        />
        <input
          className="inp-addProduct"
          placeholder="Фото-3..."
          value={img3}
          type="text"
          onChange={e => setImg3(e.target.value)}
        />
        <button className="btn-add" type="submit">
          Добавить
        </button>
      </form>
    </>
  );
};

export default AddProduct;
