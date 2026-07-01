import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/about/about.css";

function About() {
  return (
    <>
      <Header />

      <section className="our-story-wrapper">
        <div className="container">
          <h3>Our Story</h3>
          <h2>Nasi Uduk Enya Baba</h2>
          <p>
            Berdiri sejak tahun 1990, Nasi Uduk Enya Baba telah menjadi salah
            satu ikon kuliner Bekasi yang terkenal dengan cita rasa autentiknya.
            Usaha ini dibangun dengan penuh dedikasi oleh keluarga yang memiliki
            kecintaan besar terhadap kuliner tradisional Betawi. Dari generasi
            ke generasi, resep rahasia Nasi Uduk yang kaya akan rempah dan
            dimasak dengan penuh ketelitian terus dipertahankan. Dengan berbagai
            pilihan lauk, seperti ayam bakar, tempe orek, semur jengkol dan
            varian menu lainnya. Berkat komitmen terhadap kualitas, Nasi Uduk
            Enya Baba tidak hanya menjadi favorit warga sekitar, tetapi juga
            mulai dikenal oleh pelanggan dari berbagai wilayah. Meskipun zaman
            terus berubah, kami tetap berpegang teguh pada prinsip menggunakan
            bumbu dan rempah asli tanpa pengawet, sehingga cita rasa khas tetap
            terjaga. Nasi Uduk Enya Baba tetap menjadi pilihan utama bagi mereka
            yang mencari kelezatan masakan tradisional dengan sentuhan
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default About;
