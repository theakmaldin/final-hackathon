import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="footer-content">
          <div className="footer-title">
            <img
              style={{ width: "50%" }}
              src="https://thumb.tildacdn.com/tild6630-3432-4966-a332-386363623835/-/resize/246x/-/format/webp/photo.png"
              alt="theflow"
            />
            <ul style={{ padding: "0" }}>
              <li>© ТОО «The Flow» 2022</li>
              <li>ИИН (БИН): 210240024007</li>
            </ul>
          </div>

          <ul>
            <li>г.Алматы, проспект Достык 117/6a</li>
            <li>(бывш. ул. Хаджи Мукана 22/5),</li>
            <li>5 этаж, почтовый индекс 050059.</li>
          </ul>

          <ul style={{ margin: "0", padding: "0" }}>
            <a href="https://mk.theflow.kz/conf">Политика конфедициальности</a>
            <li>+7 (707) 929 20 20</li>
            <li>ИП Симдянов А.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
