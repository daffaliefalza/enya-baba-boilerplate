import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="headline-container">
          <h1>
            Rasakan Kenikmatan Autentik Nasi Uduk enya baba di Setiap Suapan!
          </h1>
          <p>
            Nasi uduk Betawi Enya Baba memiliki cita rasa autentik yang tetap
            terjaga secara turun-temurun, sehingga diminati oleh berbagai
            kalangan. Harganya terjangkau dan tempatnya nyaman, memberikan
            suasana hangat seperti di rumah nenek
          </p>
          <button>Lihat Menu</button>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </section>
  );
}
export default Hero;
