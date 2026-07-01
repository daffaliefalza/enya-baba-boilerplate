import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MenuCards from "../components/MenuCards";
import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";
import { useState, useEffect } from "react";

function Home() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch(
          "https://psychological-prudy-daffaliefalza-ff1f9eed.koyeb.app/api/menus",
        );
        const data = await res.json();
        console.log(data);
        setMenus(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMenus();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <section className="menu-highlight">
        <div className="container">
          <h2>Menu Highlight</h2>
          <div className="menu-row">
            {menus.slice(0, 3).map((menu) => (
              <MenuCards menus={menu} key={menu.foodName} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
