function MenuCards(props) {
  let { foodName, price, imgUrl } = props.menus;

  return (
    <div className="menu-card">
      <div className="menu-card-img">
        <img src={imgUrl} alt={foodName} />
      </div>
      <div className="menu-card-info">
        <h3>{foodName}</h3>
        <p className="menu-card-price">{price}</p>
        <button className="menu-card-btn">Order now</button>
      </div>
    </div>
  );
}
export default MenuCards;
