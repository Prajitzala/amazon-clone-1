import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB658235929_.jpg"
          alt="prime Banner"
        />

        <div className="home__row">
          <Product
            id="1"
            title="Make Your Bed: Feel grounded and think positive in 10 simple steps"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41mZ3G9bcmL._SX325_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Apple iPhone 13 Pro (128 GB) - Alpine Green"
            price={999}
            image="https://m.media-amazon.com/images/I/61AwGDDZd3L._SX679_.jpg"
            rating={5}
          />
          <Product
            id="3"
            title="Amazon Brand - Solimo Restera Engineered Wood King Bed with storage (Forest dark finish)"
            price={4999}
            image="https://m.media-amazon.com/images/I/71w5X4CfY3L._SX679_.jpg"
            rating={4}
          />
          {/* <Product
            id="4"
            title="Apple iPhone 13 Pro (128 GB) - Alpine Green"
            price={999}
            image="https://m.media-amazon.com/images/I/61AwGDDZd3L._SX679_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Apple iPhone 13 Pro (128 GB) - Alpine Green"
            price={999}
            image="https://m.media-amazon.com/images/I/61AwGDDZd3L._SX679_.jpg"
            rating={5}
          /> */}
        </div>

        <div className="home__row">
          <Product
            id="4"
            title="Bigmuscles Nutrition Real Mass Gainer [3Kg, Chocolate] | Lean Whey Protein Muscle Mass Gainer | Complex Carbohydrates, | 1000 Calories"
            price={299}
            image="https://m.media-amazon.com/images/I/71zXJioptHL._SX679_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Space Grey (5th Generation)"
            price={1999}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Apple Watch Series 7 (GPS, 45mm) - Midnight Aluminium Case with Midnight Sport Band - Regular"
            price={399}
            image="https://m.media-amazon.com/images/I/71fxj9HPLPL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="7"
            title="Whirlpool 1.5 Ton 3 Star, Inverter Split AC (1.5T MAGICOOL CONVERT 3S COPR INV, White)"
            price={499}
            image="https://m.media-amazon.com/images/I/41uMPN7SoIL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="8"
            title="Adorable Gold Plated Pearl Choker Necklace Set for Women"
            price={99}
            image="https://m.media-amazon.com/images/I/81UaMFQR6kL._UY695_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="9"
            title="Samsung 34 inch (86.4 cm) LED Curved Computer Monitor "
            price={3999}
            image="https://m.media-amazon.com/images/I/71it2biogSS._SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
