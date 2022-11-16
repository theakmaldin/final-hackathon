import React, { useContext, useEffect, useState } from "react";
import "./EditProduct.css";
import { productContext } from "../../../Context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);
  const [inpValues, setInpValues] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    setInpValues(productDetails);
  }, [productDetails]);
  useEffect(() => {
    readOneProduct(id);
  }, [id]);
  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }
  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !inpValues.category.trim() ||
      !inpValues.title.trim() ||
      !inpValues.description.trim() ||
      !inpValues.price ||
      !inpValues.img.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    // navigate("/list");
  }

  return (
    <>
      {inpValues ? (
        <div className="body-add">
          <form id="div-add" onSubmit={e => handleSave(e)}>
            <h2 id="add-title">Редактирование товара</h2>
            <input
              className="inp-addProduct"
              placeholder="Категория..."
              type="text"
              value={inpValues.category}
              onChange={e => handleChange(e)}
              name="category"
            />
            <input
              className="inp-addProduct"
              placeholder="Название..."
              value={inpValues.title}
              type="text"
              onChange={e => handleChange(e)}
              name="title"
            />
            <input
              className="inp-addProduct"
              placeholder="Описание..."
              value={inpValues.description}
              type="text"
              onChange={e => handleChange(e)}
              name="description"
            />
            <input
              className="inp-addProduct"
              placeholder="Цена..."
              value={inpValues.price}
              type="number"
              onChange={e => handleChange(e)}
              name="price"
            />
            <input
              className="inp-addProduct"
              placeholder="Фото..."
              value={inpValues.img1}
              type="text"
              onChange={e => handleChange(e)}
              name="img1"
            />
            <button className="btn-add" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};
export default EditProduct;
