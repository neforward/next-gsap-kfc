export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-logo">
              <img
                src="https://devkfcwebsites.fimble.io/admin/files/4672.svg"
                alt=""
              />
            </div>
            <div className="header-nav">
              <span>Menu</span>
              <span>About</span>
              <span>Restaurants</span>
              <span>Where To Buy</span>
              <span>Locations</span>
              <span></span>
            </div>
            <div className="header-cart">
              <img
                src="https://yuzeyzer.github.io/ReactJS__Doritos/static/media/cart.dc0d4b90.svg"
                alt=""
              />
              <div className="counter">
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="hero">
        <div className="container">
          <h2>a fiery burst of flavor that sparks pure satisfaction.</h2>
          <h5>KFC Chicken Wings</h5>
          <p>
            Chicken, Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine
            Mononitrate, Riboflavin, Folic Acid), Salt, Spices (Including Black
            Pepper, White Pepper, Paprika), Monosodium Glutamate, Garlic Powder,
            Onion Powder, Buttermilk Powder (Cultured Buttermilk, Whey), Corn
            Starch, Natural Flavorings, Sodium Phosphates, Breading Set in
            Vegetable Oil (Soybean Oil, Hydrogenated Soybean Oil with TBHQ and
            Citric Acid added to preserve freshness, Dimethylpolysiloxane, an
            Anti-foaming Agent added).
          </p>
          <strong>CONTAINS: WHEAT INGREDIENTS</strong>
          <h4>$34.99</h4>
          <button>Add to cart</button>
        </div>
        {/* <img src="https://yuzeyzer.github.io/ReactJS__Doritos/static/media/suyaPepper.07c5bdc5.png" alt="" /> */}
        {/* <img src="https://cdn.culvers.com/menu/images/item/sauces-dressings/wi-cheddar-cheese.png?q=90&w=800&format=auto" alt="" /> */}
        {/* <img src="https://pngimg.com/d/kfc_food_PNG50.png" alt="" /> */}
        {/* <img src="https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14104.png" alt="" />  */}
        {/* <img src="https://pngimg.com/d/fried_chicken_PNG97915.png" alt="" /> */}
        {/* <img src="https://images.ctfassets.net/9tka4b3550oc/1FQSRLVXt2Q1lvXXkOyW6U/f306561ef7bfc5ab7c84a739a46d3629/Food_09.png?q=75&w=1280" alt="" /> */}
      </div>
    </>
  );
}
