import React from "react";
import "./styles/Main.css";
const Main = () => {
  return (
    <main>
      <section className="main-section">
        <div className="main-overlay"></div>

        <div className="main-logo">
          <img
            src="./assets/logo-cinear-main.svg"
            alt="logo cinear seccion principal"
          />
        </div>

        <div className="main-gradient"></div>

        <video className="main-video" autoPlay muted loop>
          <source
            src="https://cdn.videvo.net/videvo_files/video/premium/video0040/large_watermarked/universal_countdown1_preview.mp4"
            type="video/mp4"
          />
        </video>
      </section>
      <section className="extern-links-section">
        links a sitios externos
        <ul>
          <li>
            <a href="/">
              <img className="img-extern-link-section" src="http://cine.ar/img/tv.cine.ar.svg" alt="" />
            </a>
          </li>
          <li>

            <a href="/">
              <img className="img-extern-link-section" src="http://cine.ar/img/play.cine.ar.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="img-extern-link-section" src="http://cine.ar/img/estrenos.cine.ar.svg" alt="" />
            </a>
          </li>

        </ul>
      </section>
    </main>

  );
};
export default Main;
