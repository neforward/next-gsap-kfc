"use client";
import { useEffect } from "react";
import headerAnimation from "@/utils/header";
import textAnimation from "@/utils/animationTxt";
import basketAnimation from '@/utils/animationBasket';

export default function Home() {
  useEffect(() => {
    headerAnimation();
    textAnimation();
    basketAnimation();
  }, []);

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
          <div className="flexxx">
            <div className="text-section">
              <h2>Light fire under your tasty chicken</h2>
              <h5>KFC Chicken Wings</h5>
              <p>
                Chicken, Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine
                Mononitrate, Riboflavin) Salt Spices (Including Black Pepper,
                White Pepper, Paprika), Monosodium Glutamate, Garlic Powder,
                Onion Powder, Buttermilk Powder (Cultured Buttermilk, Whey),
                Corn Starch, Natural Flavorings, Sodium Phosphates, Breading Set
                in Vegetable Oil (Soybean Oil, Hydrogenated Soybean Oil with
                TBHQ and Citric Acid added to preserve freshness,
                Dimethylpolysiloxane, an Anti-foaming Agent added).
              </p>
              <h6>CONTAINS: WHEAT INGREDIENTS</h6>
              <h4>$34.99</h4>
              <button>Add to cart</button>
            </div>
            <div className="basket-section">
              <div className="bg-yellow"></div>
              <img
                className="basket-image"
                src="https://images.ctfassets.net/9tka4b3550oc/1FQSRLVXt2Q1lvXXkOyW6U/f306561ef7bfc5ab7c84a739a46d3629/Food_09.png?q=75&w=1280"
                alt=""
              />
              <img
                className="spicies"
                src="https://yuzeyzer.github.io/ReactJS__Doritos/static/media/suyaPepper.07c5bdc5.png"
                alt=""
              />
              <img
                className="cheese"
                src="https://cdn.culvers.com/menu/images/item/sauces-dressings/wi-cheddar-cheese.png?q=90&w=800&format=auto"
                alt=""
              />
              <img
                className="chicken-wing"
                src="https://lirp.cdn-website.com/f24ef9b3/dms3rep/multi/opt/Wing_Snob_Leg-640w.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
