import React from "react";
import Navbar from "../Navbar/Navbar";
import "./MarketingPage.css";

const Marketing = () => {
  return (
    <div className="container-marketing">
      {/* {<Navbar />} */}
      <div className="box-marketing-1">
        <div className="content-marketing-1">
          <img
            className="marketing-imgCloudBlue"
            src="https://thumb.tildacdn.com/tild6262-3135-4439-b838-346534386166/-/format/webp/smoke_blue.png"
            alt=""
          />
          <p>Сторона интернет-маркетинга</p>
          <p style={{ fontSize: "36px" }}>
            Стань востребованным <br />
            интернет-маркетологом <br />
            за 3 месяца и выйди
          </p>
          <p className="marketing-grad">надоход 400 000 тг/мес</p>

          <div className="btn-marketing-1">
            {/* <div className="marketing-stick"></div> */}
            <button className="btn-1">Участвовать</button>
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
        <img
          className="marketing-imgCloudRed"
          src="https://thumb.tildacdn.com/tild3232-3535-4430-a562-373637666631/-/format/webp/1-20220209_004453.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Marketing;
