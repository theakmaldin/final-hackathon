import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  console.log("HOME");
  return (
    <>
      <div className="homePage-container">
        <div className="homePage-box"></div>
        <div className="homePage-title">
          <img
            className="homePage-imgMoon"
            src="https://thumb.tildacdn.com/tild3433-6636-4038-b465-313131626463/-/resize/248x/-/format/webp/moon.png"
            alt="moon"
          />
          <div>
            <p className="homePage-textTheFlow">ПОТОК</p>
            <p className="homePage-textIt">ОБРАЗОВАТЕЛЬНАЯ IT-КОМПАНИЯ</p>
          </div>
          <div className="homePage-block">
            <img
              style={{ width: "50%" }}
              src="https://thumb.tildacdn.com/tild6165-3031-4461-a162-666165633366/-/resize/930x/-/format/webp/Rectangle_7.png"
              alt="arrow"
            />
            <p className="homePage-textBlock">
              Освой с нуля востребованную профессию
              <br />и стань топовым специалистом в Digital
            </p>
          </div>
        </div>
        <img
          className="homePage-imgSkyBlue"
          src="https://thumb.tildacdn.com/tild6262-3135-4439-b838-346534386166/-/format/webp/smoke_blue.png"
          alt=""
        />
        <div className="homePage-textArrow">
          <h1 style={{ fontSize: "60px", color: "white" }}>
            ВЫБЕРИ НАПРАВЛЕНИЕ ПО ДУШЕ
          </h1>
          <img
            className="homePage-arrow"
            src="https://thumb.tildacdn.com/tild6231-6435-4232-b236-313136366166/-/resize/112x/-/format/webp/next3.png"
            alt="arrow"
          />
        </div>
        <div className="homePage-armanDrag">
          <img
            src="https://thumb.tildacdn.com/tild3434-6163-4630-b437-643138643634/-/resize/870x/-/format/webp/arman.png"
            alt="ArmanDrag"
          />
        </div>
        <div className="homePage-contextBlockMain">
          <div className="homePage-contentBlockBlue">
            <a href="" style={{ fontSize: "40px" }}>
              Интернет-маркетинг
            </a>
            <p style={{ fontSize: "20px", color: "white" }}>
              Научись составлять стратегию продвижения, <br />
              профессионально работать с Яндекс.Директ,
              <br />
              Google Adwords и таргетированной рекламой,
              <br /> анализировать показатели и системно приводить
              <br /> сотни клиентов в день для разных бизнесов.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
                paddingTop: "5%",
              }}>
              <div>
                <p style={{ color: "#1fb4ff", fontSize: "18px" }}>
                  Зарплата на рынке:
                </p>
                <p style={{ color: "#ffffff", fontSize: "24px" }}>
                  300 - 800к тг
                </p>
              </div>
              <div>
                <p style={{ color: "#1fb4ff", fontSize: "18px" }}>
                  Срок обучения:
                </p>
                <p style={{ color: "#ffffff", fontSize: "24px" }}>3 месяца</p>
              </div>
            </div>
            <Link to="/marketing">
              <div className="homePage-btnBlue">
                <a href="">Узнать подробнее</a>
              </div>
            </Link>
          </div>

          <div className="homePage-contentBlockRed">
            <a href="" style={{ fontSize: "40px" }}>
              SMM
            </a>
            <p style={{ fontSize: "20px", color: "white" }}>
              Научись приводить сотни тысячи клиентов из <br />
              Instagram для бизнесов или личных профилей,
              <br />
              с помощью ведения аккаунтов, продвижения
              <br /> через таргетированную рекламу, увеличение
              <br /> тёплой аудитории
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
                paddingTop: "5%",
              }}>
              <div>
                <p style={{ color: "#ff6b6b", fontSize: "18px" }}>
                  Зарплата на рынке:
                </p>
                <p style={{ color: "#ffffff", fontSize: "24px" }}>
                  300 - 800к тг
                </p>
              </div>
              <div>
                <p style={{ color: "#ff6b6b", fontSize: "18px" }}>
                  Срок обучения:
                </p>
                <p style={{ color: "#ffffff", fontSize: "24px" }}>3 месяца</p>
              </div>
            </div>
            <Link to="/smm">
              <div className="homePage-btnRed">
                <a href="">Узнать подробнее</a>
              </div>
            </Link>
          </div>
        </div>

        <div className="homePage-blockInfo">
          <img
            src="https://thumb.tildacdn.com/tild3461-3032-4437-b835-626237333235/-/format/webp/Rectangle_7.png"
            alt="block-1"
          />
          <img
            src="https://thumb.tildacdn.com/tild3334-3031-4233-b062-626361643562/-/format/webp/Rectangle_8.png"
            alt="block-2"
          />
        </div>
        <img
          className="homePage-imgSkyRed"
          src="https://thumb.tildacdn.com/tild3431-6266-4862-a261-316564653632/-/format/webp/smoke_red.png"
          alt=""
        />
      </div>
    </>
  );
};

export default HomePage;
