import React from "react";
import Navbar from "../Navbar/Navbar";
import "./InfoPage.css";

const InfoPage = () => {
  return (
    <div className="container-infoPage">
      {<Navbar />}
      <div className="box-infoPage-1">
        <div className="content-infoPage-1">
          <p>Сторона интернет-маркетинга</p>
          <p style={{ fontSize: "36px" }}>
            Стань востребованным <br />
            интернет-маркетологом <br />
            за 3 месяца и выйди
          </p>
          <p className="infoPage-grad">надоход 400 000 тг/мес</p>

          <div className="btn-infoPage-1">
            <button className="btn-1">Участвовать</button>
            <div className="infoPage-stick"> </div>
            <ul>
              <li>за руку с профи</li>
              <li>с гарантией трудоустройства</li>
            </ul>
          </div>
        </div>

        <img
          src="https://thumb.tildacdn.com/tild3236-6236-4264-b135-346431336135/-/format/webp/Layer_12.png"
          alt="Arman"
        />
      </div>
    </div>
  );
};

export default InfoPage;
