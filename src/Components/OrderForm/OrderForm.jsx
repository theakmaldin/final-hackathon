import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./OrderForm.css";

const OrderForm = ({ close }) => {
  const [thanks, setThanks] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {<Navbar />}
      <div className="orderBack">
        <div className="orderBack__modal">
          <button onClick={() => close(false)} className="closeModal">
            X
          </button>
          <span className="pole">помечены обязательные поля</span>
          <span>ФИО*</span>
          <input className="modal_input" required />
          <span>Email*</span>
          <input className="modal_input" required />
          <span>Номер телефона*</span>
          <input className="modal_input" required />
          <span>Адрес проживания*</span>
          <input className="modal_input" required />
          <span>
            Здесь вы можете написать любые вопросы или комментарии, которые вас
            интересуют
          </span>
          <input className="modal_input textArea" required />
          <button className="brony" onClick={() => setThanks(true)}>
            Купить сейчас
          </button>
        </div>
      </div>
      {thanks ? (
        <div className="orderBack">
          <div className="thanks">
            <Link to="/list">
              <button onClick={() => close(false)} className="closeModal">
                X
              </button>
            </Link>
            <h2 style={{ textAlign: "center" }}>
              Ожидайте, с вaми свяжуться в течение дня!
            </h2>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OrderForm;
