import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import MenuCards from "../components/MenuCards";
import "../styles/menus/menus.css";

function Menu() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch(
          "https://psychological-prudy-daffaliefalza-ff1f9eed.koyeb.app/api/menus",
        );
        const data = await res.json();
        setMenus(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenus();
  }, []);

  return (
    <>
      <Header />
      <section className="menu-page">
        <div className="container">
          <h1>Menu Page</h1>
          <div className="menu-row">
            {menus.map((menu) => {
              return <MenuCards menus={menu} key={menu.foodName} />;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Menu;
