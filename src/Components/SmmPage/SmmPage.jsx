import React from "react";
import Navbar from "../Navbar/Navbar";
import "./SmmPage.css";

const SmmPage = () => {
  return (
    <div className="container-smm">
      {<Navbar />}
      <div className="box-smm-1">
        <div className="content-smm-1">
          <img
            className="smmPage-imgCloudBlue"
            src="https://thumb.tildacdn.com/tild6262-3135-4439-b838-346534386166/-/format/webp/smoke_blue.png"
            alt="cloud"
          />
          <p>Сторона SMM</p>
          <p style={{ fontSize: "36px" }}>
            Стань востребованным
            <br />
            SMM-специалистом за <br />
            за 3 месяца и выйди на
          </p>
          <p className="smm-grad">надоход 400 000 тг/мес</p>

          <div className="btn-smm-1">
            {/* <div className="smm-stick"></div> */}
            <button className="btn-2">Участвовать</button>
            <ul>
              <li>за руку с профи</li>
              <li>с гарантией трудоустройства</li>
            </ul>
          </div>
        </div>
        <img
          className="smmPage-imglight"
          src="https://thumb.tildacdn.com/tild6334-3133-4235-a232-623666323734/-/format/webp/photo.png"
          alt=""
        />
        <img
          className="smmPage-img"
          src="https://thumb.tildacdn.com/tild3530-6334-4665-b137-646332313331/-/resize/970x/-/format/webp/Layer_23_copy.png"
          alt="Arman"
        />
        <img
          className="smmPage-imgCloudRed"
          src="https://thumb.tildacdn.com/tild3863-3464-4535-b139-383233313263/-/format/webp/1-20220209_004453.png"
          alt="cloud"
        />
      </div>
    </div>
  );
};

export default SmmPage;
