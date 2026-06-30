import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MenuCards from "../components/MenuCards";
import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";
import { useState } from "react";

const menuData = [
  {
    foodName: "Paket 1",
    price: "20.000",
    imgUrl: menu1,
  },

  {
    foodName: "Paket 2",
    price: "25.000",
    imgUrl: menu2,
  },

  {
    foodName: "Paket 3",
    price: "30.000",
    imgUrl: menu2,
  },
];

function Home() {
  const [menus, setMenus] = useState(menuData);

  return (
    <>
      <Header />
      <Hero />
      <section className="menu-highlight">
        <div className="container">
          <h2>Menu Highlight</h2>
          <div className="menu-row">
            {menus.map((menu) => (
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
